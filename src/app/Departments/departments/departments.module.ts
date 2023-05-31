import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from '../departments/departments.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { AvatarModule } from 'primeng/avatar';
import { DeptMoreComponent } from '../dept-more/dept-more.component';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';

const routes: Routes = [
 
  {path:"",component:DepartmentsComponent},
  {path:"DeptMore",component:DeptMoreComponent},



]

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ChartModule,
    AvatarModule,
    CarouselModule,
    TableModule,
  
    [RouterModule.forChild(routes)]
  ]
})
export class DepartmentsModule { }
