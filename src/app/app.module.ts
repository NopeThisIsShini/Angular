import { APP_INITIALIZER, importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsListComponent } from './components/rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './interceptor/request.interceptor';
import { InitService } from './components/rooms/services/init.service';
// prime ng update
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoomsBookingComponent } from './components/rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './components/rooms/rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { HoverDirective } from './directives/hover.directive';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';



// APP_INITIALIZER 
function initializeAppFactory(initService: InitService) {
  return () => initService.init();
 }

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [ 
    MessageService,
    // for browser animation 
    importProvidersFrom(BrowserAnimationsModule),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [InitService],
      multi: true
    },
    provideHttpClient(
      withInterceptors([requestInterceptor])
    )
    
    // importProvidersFrom(BrowserAnimationsModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
