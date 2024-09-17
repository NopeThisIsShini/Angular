import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../models/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {

   //below line just do, make this rooms property as an valid html property of app-rooms-list
   @Input() rooms: RoomList[]=[]
   @Input() title: string='';
 
   //pass data to parent component
   @Output() selectedRoom = new EventEmitter<RoomList>();
   selectRoom(room: RoomList){
    this.selectedRoom.emit(room) ;
  }
   ngOnInit(): void {
     
   }
   //ngOnChanges
   ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
     //if value change what will happen
     if(changes['title']){
       this.title = changes['title'].currentValue.toUpperCase();
     }
     
   }
  

}
