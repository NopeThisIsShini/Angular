import { Component, OnInit } from '@angular/core';
import { RoomService } from './services/room.service';
import { RoomList } from './models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})

export class RoomsComponent implements OnInit{
  roomlist: RoomList[] = []
  selectedRoom!: RoomList
  constructor(private roomServ: RoomService){

  }
  ngOnInit(): void {
    this.roomlist=this.roomServ.getRooms();
  } 
  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room
  }
}
