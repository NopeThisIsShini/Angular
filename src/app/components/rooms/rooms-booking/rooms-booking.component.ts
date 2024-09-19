import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit{
  id!: number;
  // using rxjs observable 
  // id$ !: Observable<number>;
  // this is how without using paramMap and snapshot we can use fetch active route
  // id$ = this.routeActive.params.pipe(
  //   map(params => params['id'])
  // );
  // paramMap using rxjs operator
  id$ = this.routeActive.paramMap.pipe(
    map(params => params.get('id'))
  );
  constructor (private routeActive: ActivatedRoute){
  }
  ngOnInit(): void {
    // we should always avoid this approach i mean subscribe approach
    // this.routeActive.params.subscribe((params) => {
    //   console.log(params)
    //   // console.log(params['id'])
    //   this.id = params['id']
    // })
    
    
    // another way to read id , but snapshot never update id 
    // this.id = this.routeActive.snapshot.params['id'];
    // paramMap is better than snapshot, let's use it as snapshot never update value , 
    // this.routeActive.paramMap.subscribe((params) =>{
    //   params.get('id');
    // })


  }
} 
