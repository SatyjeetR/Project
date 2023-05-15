import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { FormsModule }      from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
 
  {path:"",component:DashboardComponent},


]


@NgModule({
  // bootstrap: [AppComponent],
  declarations: [],
  imports: [
    ChartModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    [RouterModule.forChild(routes)]

  ]
})
export class DashBoardModule { }
