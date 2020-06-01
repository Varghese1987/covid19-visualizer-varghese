import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CovidServiceService } from '../covid-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  activeTrendCount = [];
  trendDataDates = [];
  curedTrend;
  deathTrend; 
  isDataAvailable:boolean = false;
  constructor(private covidService: CovidServiceService, private router : Router) {
    this.covidService.retriveData().subscribe((data)=>{
      this.activeTrendCount = data.cases_time_series.map(data => parseInt(data.dailyconfirmed));
      this.trendDataDates = data.cases_time_series.map(data => data.date);      
      this.isDataAvailable = true;
    }) 
   }

  lineChartData: Chart.ChartDataSets[] = [
    {
      label: 'Active',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: this.activeTrendCount,
    },
  ];
  lineChartLabels: Array<any> = this.trendDataDates;
  lineChartOptions: any = {
    responsive: true
  };
   lineChartLegend = true;
  lineChartType = 'line';
  inlinePlugin: any;
  textPlugin: any;

  ngOnInit(){
    this.textPlugin = [{
      id: 'textPlugin',
      beforeDraw(chart: any): any {
        const width = chart.chart.width;
        const height = chart.chart.height;
        const ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        const text = 'COVID19';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }];

    this.inlinePlugin = this.textPlugin;

  }

}
