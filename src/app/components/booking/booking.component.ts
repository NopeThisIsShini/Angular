import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  get guests(){
    return this.bookingForm.get('guests') as FormArray
  }

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
      address: this.fb.group({
        AddressLine: [''],
        AddressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''], 
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl(''), image: [null] }),
      ]),
    })
  }
  addBooking(){
                                // getRawValue() returns the raw value means,  desable property value
                                // value() can't return desable property value
    console.log(this.bookingForm.getRawValue());
  }
  addGuest(){
    this.guests.push (
      this.fb.group({ guestName: [''], age: new FormControl(''), image: [null] })
    )
  }
  // delete array element dynamicly
  deleteGuest(i:number){
    if(this.guests.length > 1)
    this.guests.removeAt(i)
  }
  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Store the file in the corresponding FormGroup
      this.guests.at(index).patchValue({ image: file });
    }
  }
}
