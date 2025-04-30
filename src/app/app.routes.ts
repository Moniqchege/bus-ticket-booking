import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { BookingFormComponent } from './features/booking/booking-form/booking-form.component';
import { BusListComponent } from './features/booking/bus-list/bus-list.component';
import { SearchComponent } from './features/booking/search/search.component';
import { TicketDetailsComponent } from './features/tickets/ticket-details/ticket-details.component';
import { TicketHistoryComponent } from './features/tickets/ticket-history/ticket-history.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ManageBusesComponent } from './features/admin/manage-buses/manage-buses.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-buses',
    component: ManageBusesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booking-form',
    component: BookingFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bus-list',
    component: BusListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-details',
    component: TicketDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ticket-history',
    component: TicketHistoryComponent,
    canActivate: [AuthGuard]
  }
];
