import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from '../doctors/doctors.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {path:"",component:DoctorsComponent},


]
@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]

  
  ]
})
export class DoctorsModule { }
