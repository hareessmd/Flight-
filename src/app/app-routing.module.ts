import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { CustsignComponent } from './custsign/custsign.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { SearchscheduleComponent } from './searchschedule/searchschedule.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { YourticketComponent } from './yourticket/yourticket.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcomepage', pathMatch: 'full'},
  {path: 'book-flight', component : BookFlightComponent},
  {path: 'confirmbooking', component : ConfirmbookingComponent},
  {path: 'yourticket', component : YourticketComponent},
  {path: 'welcomeuser', component : WelcomeuserComponent},
  {path: 'cancelbooking', component : CancelbookingComponent},
  {path: 'welcomepage', component : WelcomepageComponent},
  {path: 'custsign', component : CustsignComponent},
  {path: 'custlogin', component : CustloginComponent},
  {path: 'adminlogin', component : AdminloginComponent},
  {path: 'welcomeadmin', component : WelcomeadminComponent},
  {path: 'addflight', component : AddflightComponent},
  {path: 'searchflight', component : SearchflightComponent},
  {path: 'addschedule', component : AddscheduleComponent},
  {path: 'searchschedule', component : SearchscheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[
  BookFlightComponent, 
  ConfirmbookingComponent,
  YourticketComponent, 
  WelcomeuserComponent,
  CancelbookingComponent,
  WelcomepageComponent,
  CustsignComponent,
  CustloginComponent,
  AdminloginComponent,
  WelcomeadminComponent,
  AddflightComponent,
  SearchflightComponent,
  AddscheduleComponent,
  SearchscheduleComponent
]