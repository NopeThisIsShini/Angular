import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular';

  // dynamic component loading 
  @ViewChild('room', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    const roomRef = this.vcr.createComponent(RoomsComponent);
    roomRef.instance.view = 'This is after view changed'
  }
}
