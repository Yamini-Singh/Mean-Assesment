import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  movies(movieName:string,img:string, genre:string, description: string) {
    this.service.addmovie(movieName,img,genre,description).subscribe();  
    alert("Movie added successfully");
    }

  deletemovie(name:string) {
    this.service.delmovie(name).subscribe();  
    alert("Movie deleted successfully");
  } 

  series(seriesName:string,img:string, genre:string, description: string) {
    this.service.addseries(seriesName,img,genre,description).subscribe();  
    alert("Series added successfully");
    }

  deleteseries(name:string) {
     this.service.delseries(name).subscribe();  
     alert("Series deleted successfully");
    } 

}
