import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private api:TcnewsapiService )  { }
 
  topHeadlineData:any=[];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>
    {
      console.log(result.articles);
      this.topHeadlineData=result.articles;
    })
  }

}
