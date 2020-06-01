import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  corona = "assets/img/corona.png";
  
  nationalData; 
  activeTrendCount = [];
  trendDataDates = [];
  curedTrend;
  deathTrend; 
  isDataAvailable:boolean = false;
  constructor(private covidService: CovidServiceService) {
    this.covidService.retriveData().subscribe((data)=>{
      this.nationalData = data.statewise.find(state =>state.statecode = "TT");
      this.activeTrendCount = data.cases_time_series.map(data => parseInt(data.dailyconfirmed));
      this.trendDataDates = data.cases_time_series.map(data => data.date);
      this.isDataAvailable = true;
    })    
    
   }
   ngOnInit(): void {
      
   }
}