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
  // used to understand ngonchanges
  title: string='Room list';

  // a property which is changed using viewchild and viewafterInit
  view: string = 'this is before change view'
  onToggle(){
    this.title = 'Rooms list'
  }
  constructor(private roomServ: RoomService){

  }
  ngOnInit(): void {
    this.roomlist=this.roomServ.getRooms();
  } 
  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room
  }
  // add room static data
  addRoom(){
    const room: RoomList = {
      roomNumber: 7,
      roomType: 'Delux',
      price: 2000,
      amenities: 'AC, WiFi, TV',
      chekInTime: new Date('2022-11-02'),
      checkOutTime: new Date('2022-11-03')
    }
    // this means everytime it's returns a new intance with old ones
    this.roomlist = [...this.roomlist, room]
  }
  // this.roomlist.push(room);
}
