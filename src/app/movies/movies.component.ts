import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 public movie : any=[];
  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.service.getmovie().subscribe(res=>{this.movie=JSON.parse(res.text())
      console.log(this.movie);
  })
  }
}
    
  


