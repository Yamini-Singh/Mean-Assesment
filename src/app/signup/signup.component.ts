import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthenticationService, private router : Router) { }

  ngOnInit() {
  }
  
  onSignup(email: string, name: string, password: string) {
    this.service.onSignup(email, name, password).subscribe(res => console.log(res));
  }

}





