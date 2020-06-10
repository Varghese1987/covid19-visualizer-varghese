import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  loadChart(){
    
  }
  logout(){
    localStorage.removeItem('responseToken');
    this.router.navigate(['/']);
    this.toastr.warning('You have been Logged Out!');
  }

}
