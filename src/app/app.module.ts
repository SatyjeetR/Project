import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DoctorProfileComponent } from './Doctors/doctor-profile/doctor-profile.component';
import { DeptMoreComponent } from './Departments/dept-more/dept-more.component';
import { TestPipe } from './test.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorProfileComponent,
    DeptMoreComponent,
    TestPipe,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChartModule,
    BrowserAnimationsModule,
    InputTextModule,
    AvatarModule,
    BadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
