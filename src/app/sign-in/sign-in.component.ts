import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
loginForm : FormGroup;
  constructor(
    private fb:FormBuilder, 
    private userService : UserService, 
    private router : Router,
    private toastr : ToastrService
    ) {
    this.loginForm = this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",Validators.required)
    })

   }

  ngOnInit(): void {
  }

  login(){
    this.userService.signIn(this.loginForm.value).subscribe( response =>{
      localStorage.setItem('responseToken',response['token'])
      this.router.navigate(["/home"]);
      this.toastr.success("welcome!")      
    },
    error =>{
      console.log(error.error.message)
      alert(`${error.error.message} Pls Login with correct details or if you are a new user pls register and then login to proceed further`)
    }
    )
    
  }

}
