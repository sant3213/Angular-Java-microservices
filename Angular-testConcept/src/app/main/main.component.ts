import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: GetDataService) { }
  dataRetrieved:any;

  ngOnInit() {
  this.retrieveData()
  }

  retrieveData(){
   this.service.getData().subscribe((apiData)=>{
     this.dataRetrieved= apiData['body'];
    console.log(this.dataRetrieved)});
  }

}
