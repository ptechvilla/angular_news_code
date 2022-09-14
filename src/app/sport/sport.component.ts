import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service'

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  // sport news Data
  tcSportNewsData:any=[];
  ngOnInit(): void {
    this.api.tcsportnews().subscribe((result)=>{
      console.log(result.articles);
      this.tcSportNewsData=result.articles;
    })
  }

}
