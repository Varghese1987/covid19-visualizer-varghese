import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private userService : UserService, private router : Router) {
    this.registerForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",Validators.required)
    })

   }

  ngOnInit(): void {
  }

  register(){
    this.userService.storeUser(this.registerForm.value).subscribe((response)=>{
      alert(response);
    })
    this.router.navigate(["/"]);
    
  }

}
