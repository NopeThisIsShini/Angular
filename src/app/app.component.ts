import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';
import { localStorageToken } from './localStorage.token';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit{


  title = 'angular';
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private messageService: MessageService
  ){}
  // for toast check 
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
  ngOnInit(): void {
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
