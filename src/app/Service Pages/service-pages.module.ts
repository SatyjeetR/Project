import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';


import { InvoicesComponent } from './invoices/invoices.component';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EventsTimelineComponent } from './events-timeline/events-timeline.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ChartModule } from 'primeng/chart';

const routs: Routes = [
  { path: 'Invoice', component: InvoicesComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'EditAccount', component: EditAccountComponent },
  { path: 'UserProfile', component: UserProfileComponent },
  { path: 'EventsTimeline', component: EventsTimelineComponent },
  { path: 'EventsCalender', component: EventsCalendarComponent },

]



@NgModule({
  declarations: [
    InvoicesComponent,
PricingComponent,
EditAccountComponent,
UserProfileComponent,
EventsTimelineComponent,
EventsCalendarComponent

  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    AvatarModule,
    PaginatorModule,
    CardModule,
    TimelineModule,
    ChartModule,
    [RouterModule.forChild(routs)]

  ]
})
export class ServicePagesModule { }
