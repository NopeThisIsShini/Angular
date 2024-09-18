import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../models/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  // concept of immutability, it will not change
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges{

   //below line just do, make this rooms property as an valid html property of app-rooms-list
                                // this null as it can also returns null 
   @Input() rooms: RoomList[] | null =[]
   // title which is used to understand ngonchanges
   @Input() title: string='';

  //  remember ngOnChanges works in that component which contain input property 
 
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
     //if value change then change title, you can triggerd this value the you want
     // i think there is not lots of use case of this if as if i shutdown app this not work any more, it only 
     // work for first change...
     if(changes['title']){
       this.title = changes['title'].currentValue.toUpperCase();
     }
     
   }
  

}
