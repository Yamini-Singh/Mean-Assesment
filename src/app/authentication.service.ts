import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  email= '';
  role:number;

  constructor(private http: Http) { }
  
  login(email: string) {
    return this.http.get('http://192.168.12.102:8888/api/v1/getUser/' + email);
 }
 onSignup(email: string, name: string, password: string) {
   return this.http.post('http://192.168.12.102:8888/api/v1/createUser',
   ({ email : email , name: name, password: password}));
 }


}


