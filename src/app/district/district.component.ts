import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districtData
  isDataAvailable:boolean = false;
  constructor(private covidService: CovidServiceService, private activatedRoute : ActivatedRoute) {
    this.covidService.retriveState().subscribe((data)=>{
      console.log(data)
      this.districtData = data.find(state =>state.statecode == this.activatedRoute.snapshot.params.id);
      console.log(this.districtData)
      this.isDataAvailable = true;
    })    
    
   }

  ngOnInit(): void {
  }

}
