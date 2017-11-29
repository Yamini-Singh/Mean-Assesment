import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {
  public series : any=[];
  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.service.getseries().subscribe(res=>{this.series=JSON.parse(res.text())
      console.log(this.series);
  })
  }

}
