import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent {

  booking:any
  isSpinning=false;


constructor(private service:CustomerService ){}

ngOnInit(){
  this.getMyBookings();
  console.log(this.booking);
}

getMyBookings(){
  this.isSpinning=true;
this.service.getBookingByUserId().subscribe((resp)=>{
  this.isSpinning=false;
  this.booking=resp;
})
}


}
