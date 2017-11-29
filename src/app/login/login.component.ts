import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any =[];

  constructor(private router: Router,private service: AuthenticationService) { }

  ngOnInit() {
  }
  login (email: string , password : string) {
    this.service.login(email,password)
    .subscribe(res => 
     {
     console.log(res); // For testing purpose only
     this.user = JSON.parse(res.text()); 
     console.log(this.user); // For testing purpose only
    
     if(this.user.success) {
      var token =this.user.token;
      localStorage.setItem('token',token);
       const base64Url = token.split('.')[1];
       const base64 = base64Url.replace('-', '+').replace('_', '/');
       console.log(JSON.parse(window.atob(base64)).role );      
       this.service.email = JSON.parse(window.atob(base64)).email;      
       this.service.role = parseInt(JSON.parse(window.atob(base64)).role, 10);
       this.router.navigate(['/loggedinpage']);
       this.service.email = this.user.email;
       this.service.role = this.user.role;
       this.service.show = true;
       console.log(this.service.email);} 
    //  } else(this.user == null) {
    //   console.log('Error occurred'); // For testing purpose only
    //   alert('Error occurred ');
    //  }
    // } else {
    //   console.log("Successfully logged in")  // For testing purpose only
    //    this.router.navigate(['/loggedinpage']);
    //   this.service.email = this.user.email;
    //   this.service.role = this.user.role;
    //   this.service.show = true;
    //   console.log(this.service.email);   // For testing purpose only
    // 

 });
}
}

