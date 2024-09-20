import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';
import { localStorageToken } from './localStorage.token';
import { MessageService } from 'primeng/api';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit{


  title = 'angular';
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private messageService: MessageService,
    private router: Router
  ){}

  
  
  // for toast check 
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
  ngOnInit(): void {
    // how in particular navigation we can set loader or anything
    // this is how we can set a laoder in navigation start or end
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) =>{
      console.log('navigation start');
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) =>{
      console.log('navigation end');
    })
    

    // this is how to set structured data in local storage
    this.localStorage.setItem('token', 'testjwttoken');
  }
  // dynamic component loading 
  @ViewChild('room', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    const roomRef = this.vcr.createComponent(RoomsComponent);
    roomRef.instance.view = 'This is when i changing value through viewchild and dynamic loading'; 
  }
}
