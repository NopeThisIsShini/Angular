import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  bookingForm !: FormGroup;
  constructor(private fb:FormBuilder){}
  // roomNo: string = '2'
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      // another syntax, useful when we try to pass any value
      roomId: new FormControl({value: '2', disabled: true}),
      // useful for shortcut  
      guestEmail: [''],
      checkinDate: [''],
      CheckoutDate: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],  
      guestCount: [''],
    })
  }
  addBooking(){
                                // getRawValue() returns the raw value means,  desable property value
                                // value() can't return desable property value
    console.log(this.bookingForm.getRawValue());
  }
}
