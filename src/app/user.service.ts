import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  signIn(userDetail){
    return this.http.post("https://zen-user-api.herokuapp.com/users/authenticate",userDetail)
  }


  storeUser(userData):Observable<any>{
    return this.http.post("https://zen-user-api.herokuapp.com/users/register",userData);
  }
}
