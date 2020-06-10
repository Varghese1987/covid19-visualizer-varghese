import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StateListComponent } from './state-list/state-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { DistrictComponent } from './district/district.component';


const routes: Routes = [
  {
    path:"",
    component: SignInComponent,
  },
  {
    path:"register",
    component:RegisterComponent,
  },
  {
    path:"dash-board",
    component: DashBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate: [AuthGuard],
    children : [
      {
        path:"chart",
        component:ChartComponent,
      },
      {
        path:"state-list",
        component:StateListComponent,
      },
      {
        path:"district/:id",
        component:DistrictComponent,
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
