import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from '../departments/departments.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
 
  {path:"",component:DepartmentsComponent},


]

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class DepartmentsModule { }
