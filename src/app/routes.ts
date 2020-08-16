import { Routes, CanActivate } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import {
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,


} from './events/index'
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactiveCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve:{events: EventListResolver }},
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events',pathMatch: 'full' },
  { path: 'user',loadChildren: './user/user.module#UserModule' }
]
