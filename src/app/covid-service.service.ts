import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor( private http: HttpClient) { }


retriveData():Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json");        
}

retriveState():Observable<any>{
  return this.http.get("https://api.covid19india.org/v2/state_district_wise.json")
}

}
