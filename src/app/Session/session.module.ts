import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routs:Routes=[
{path:"Sing_Up", component:SignUpComponent},
{path:"Sing_In", component:SignInComponent},
{path:"error_404", component:Error404Component},
{path:"error_500", component:Error500Component},
]

@NgModule({
  declarations: [
    Error404Component,
    Error500Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routs)]
  ]
})
export class SessionModule { }
