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
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?(\w{5,7})+)*(\.\w{2,3})+$/.test(email) == false) {
      alert("Error:Enter Valid Email");
    }
      else{
        alert("Success");
        this.router.navigate(['/login']);
    this.service.onSignup(email, name, password).subscribe(res => console.log(res));
  }

}


}
