import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from '../patients/patients.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

const routes: Routes=[
  {path:'',component:PatientsComponent}
]
@NgModule({
  declarations: [
    PatientsComponent,

  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class PatientsModule { }
