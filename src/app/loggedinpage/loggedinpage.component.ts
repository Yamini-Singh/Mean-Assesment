import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedinpage',
  templateUrl: './loggedinpage.component.html',
  styleUrls: ['./loggedinpage.component.css']
})
export class LoggedinpageComponent implements OnInit {

  constructor(private router: Router,private service: AuthenticationService) { }

  ngOnInit() {
  }
}


