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

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'manage-buses',
        component: ManageBusesComponent
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
        path: 'booking-form',
        component: BookingFormComponent
    },
    {
        path: 'bus-list',
        component: BusListComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'ticket-details',
        component: TicketDetailsComponent
    },
    {
        path: 'ticket-history',
        component: TicketHistoryComponent
    }
];
