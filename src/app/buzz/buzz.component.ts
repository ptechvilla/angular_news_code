import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.css']
})
export class BuzzComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  Buzznews:any=[];
  ngOnInit(): void {
    this.api.tcbuzznews().subscribe((result)=>{
      console.log(result.articles);
      this.Buzznews=result.articles;

    })
  }

}
