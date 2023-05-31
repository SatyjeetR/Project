import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardModule } from './dashboard/dash-board.module';
import { DoctorsModule } from './Doctors/doctors/doctors.module';
import { DepartmentsModule } from './Departments/departments/departments.module';
import { PatientsModule } from './Patients/patients/patients.module';
import { PaymentsModule } from './Payments/payments/payments.module';
import { AppinmentModule } from './Appointments/appointments/appinment.module';

import { SessionModule } from './Session/session.module';
import { ServicePagesModule } from './Service Pages/service-pages.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/dashboard/dash-board.module').then(m => DashBoardModule) },
  { path: 'Appointments', loadChildren: () => import('./Appointments/appointments/appinment.module').then(m => AppinmentModule) },
  { path: 'Doctors', loadChildren: () => import('../app/Doctors/doctors/doctors.module').then(m => DoctorsModule) },
  { path: 'Departments', loadChildren: () => import('../app/Departments/departments/departments.module').then(m => DepartmentsModule) },
  { path: 'Patients', loadChildren: () => import('../app/Patients/patients/patients.module').then(m => PatientsModule) },
  { path: 'Payments', loadChildren: () => import('../app/Payments/payments/payments.module').then(m => PaymentsModule) },
  { path: 'ServicePages', loadChildren: () => import('../app/Service Pages/service-pages.module').then(m => ServicePagesModule) },
  { path: 'Sessions', loadChildren: () => import('../app/Session/session.module').then(m => SessionModule) },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
