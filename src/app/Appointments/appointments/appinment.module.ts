import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AppointmentsComponent } from './appointments.component';


const routes: Routes = [
 
  {path:"",component:AppointmentsComponent},
]

@NgModule({
  declarations: [
    AppointmentsComponent,
  ],
  imports: [
    CommonModule,
    
    ButtonModule,
    AvatarModule,
    PaginatorModule,
    TableModule,
    [RouterModule.forChild(routes)]
  ]
})
export class AppinmentModule { }
