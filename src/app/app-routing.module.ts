import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardModule } from './dashboard/dash-board.module';
import { AppointmentsModule } from './Appointments/appointments/appointments.module';
import { DoctorsModule } from './Doctors/doctors/doctors.module';
import { DepartmentsModule } from './Departments/departments/departments.module';
import { PatientsModule } from './Patients/patients/patients.module';
import { PaymentsModule } from './Payments/payments/payments.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/dashboard/dash-board.module').then(m => DashBoardModule) },
  { path: 'Appointments', loadChildren: () => import('../app/Appointments/appointments/appointments.module').then(m => AppointmentsModule) },
  { path: 'Doctors', loadChildren: () => import('../app/Doctors/doctors/doctors.module').then(m => DoctorsModule) },
  { path: 'Departments', loadChildren: () => import('../app/Departments/departments/departments.module').then(m => DepartmentsModule) },
  { path: 'Patients', loadChildren: () => import('../app/Patients/patients/patients.module').then(m => PatientsModule) },
  { path: 'Payments', loadChildren: () => import('../app/Payments/payments/payments.module').then(m => PaymentsModule) },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
