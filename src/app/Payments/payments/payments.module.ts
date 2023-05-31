import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from '../payments/payments.component';
import { RouterModule, Routes } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

const routs:Routes=[
  {path:'',component:PaymentsComponent}
]

@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    [RouterModule.forChild(routs)]
  ]
})
export class PaymentsModule { }
