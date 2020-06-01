import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  stateData
  isDataAvailable:boolean = false;
  constructor(private covidService: CovidServiceService) {
    this.covidService.retriveData().subscribe((data)=>{
      this.stateData = data.statewise.filter(state =>state.statecode != "TT");
      console.log(this.stateData)
      this.isDataAvailable = true;
    })    
    
   }

  ngOnInit(): void {
  }

}
