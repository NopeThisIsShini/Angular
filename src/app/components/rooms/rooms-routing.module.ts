import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  {
    // we we are lazy-loading default path will be null 
    path: '', component: RoomsComponent,
    children: [
      // always add dynamic routing before wild card , if any other routing move them before wild card and dynamic routing
      {
        path: ':id', component: RoomsBookingComponent
      },
    ]
  },
  
  {
    path: '', redirectTo: '/rooms', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
