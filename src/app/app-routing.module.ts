import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsBookingComponent } from './components/rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  {
    path: 'rooms',
    loadChildren: ()=>
      import('./components/rooms/rooms.module').then((m) => m.RoomsModule),
  },
  
  {
    path: 'employee' ,component: EmployeeComponent
  },
  { path: 'booking', loadChildren: () => import('./components/booking/booking.module').then(m => m.BookingModule) },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
