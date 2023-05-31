import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from '../doctors/doctors.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';
import { ChartModule } from 'primeng/chart';

const routes: Routes = [
 
  {path:"",component:DoctorsComponent},
  {path:"Profile",component:DoctorProfileComponent},



]
@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChartModule,
    [RouterModule.forChild(routes)]

  
  ]
})
export class DoctorsModule { }
