import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {
  email= '';
  role:number;
  show:boolean= false;
  
  constructor(private http: Http) {
    var token = localStorage.getItem('token');
    if(token !== null) {
    const base64Url = token.split('.')[1];      
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(JSON.parse(window.atob(base64)).role);      
    this.email = JSON.parse(window.atob(base64)).email;      
    this.role = parseInt(JSON.parse(window.atob(base64)).role, 10);
    }
   }
  
  setHeader() {    
    const headers = new Headers({      
      'Content-Type': 'application/json',      
      'Authorization': 'Bearer ' + localStorage.getItem('token')    
    });    
    const options = new RequestOptions({ headers: headers });    
    return options;  
  }
  
 login(email: string, password: string) {
  console.log(email);
    return this.http.get('http://localhost:8888/api/v1/getUser/' + email + "/" + password);
 }

 onSignup(email: string, name: string, password: string) {
   return this.http.post('http://localhost:8888/api/v1/createUser',
   ({ email : email , name: name, password: password}));
 }

 addmovie(movieName: string, img: string, genre: string, description: string) {
  return this.http.post('http://localhost:8888/api/v1/addMovie', 
  ({  movieName: movieName, img: img, genre: genre, description: description}), this.setHeader());
}

 getmovie(){
   return this.http.get('http://localhost:8888/api/v1/getMovies', this.setHeader());
 }

 delmovie(name: string) {
  return this.http.delete('http://localhost:8888/api/v1/deleteMovie/' + name, this.setHeader());
}

 addseries(seriesName: string, img: string, genre: string, description: string) {
  return this.http.post('http://localhost:8888/api/v1/addSeries',
  ({  seriesName: seriesName, img: img, genre: genre, description: description}), this.setHeader());
}

 getseries(){
   return this.http.get('http://localhost:8888/api/v1/getSeries', this.setHeader());
 }

 delseries(name: string) {
  return this.http.delete('http://localhost:8888/api/v1/deleteSeries/' + name, this.setHeader());
}

}


