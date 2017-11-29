import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private service : AuthenticationService) { }
 
  
  ngOnInit() {
  }

  logout() {
    this.service.email = '';
    this.service.show =false;
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }
  
}
