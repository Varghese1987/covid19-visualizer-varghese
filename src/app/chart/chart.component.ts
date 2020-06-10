import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Chart} from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartConfirm;
  chartRecovered;

  constructor(private _service : CovidServiceService) {}

  ngOnInit(){
    this._service.retriveData().subscribe((data)=>{
      console.log(data);
      let nationalChart = data.cases_time_series.map(data => parseInt(data.dailyconfirmed));
      let nationalrecovered = data.cases_time_series.map(data => parseInt(data.dailyrecovered));
      let trendDataDates = data.cases_time_series.map(data => data.date);
      console.log(trendDataDates)
      this.chartConfirm = new Chart ('confirm', {
        type:'line',
        data:{
          labels: trendDataDates,
          datasets:[
            {
              data:nationalChart,
              borderColor:'purple',
              fill:false,
            }
          ]
        },
        options:{
          legend:{
            display:false,
          },
          scales:{
            xAxes:[{
              display:true,
            }],
            yAxes:[{
              display: true,
            }]
          }
        }
      });
      this.chartRecovered = new Chart ('recovered', {
        type:'line',
        data:{
          labels: trendDataDates,
          datasets:[
            {
              data:nationalrecovered,
              borderColor:'green',
              fill:false,
            }
          ]
        },
        options:{
          legend:{
            display:false,
          },
          scales:{
            xAxes:[{
              display:true,
            }],
            yAxes:[{
              display: true,
            }]
          }
        }
      });
     
    })  
  }

}
