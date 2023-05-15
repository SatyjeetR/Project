import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from '../payments/payments.component';
import { RouterModule, Routes } from '@angular/router';

const routs:Routes=[
  {path:'',component:PaymentsComponent}
]

@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routs)]
  ]
})
export class PaymentsModule { }
