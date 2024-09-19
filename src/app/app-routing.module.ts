import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsBookingComponent } from './components/rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  
  {
    path: '', redirectTo: '/rooms', pathMatch: 'full'
  },
  {
    path: 'employee' ,component: EmployeeComponent
  },
  {
    path: 'rooms', component: RoomsComponent
  },
  {
    path: 'rooms/:id', component: RoomsBookingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
