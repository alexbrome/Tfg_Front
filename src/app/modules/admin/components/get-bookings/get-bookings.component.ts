import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.scss']
})
export class GetBookingsComponent {

bookings!:any[];
isSpinning:boolean=false;

constructor(private adminService:AdminService,private message:NzMessageService){
  this.getBookings();
}

getBookings(){
  this.isSpinning=true;
  this.adminService.getBikeBookings().subscribe((resp)=>{
    console.log(resp);
    this.isSpinning=false;
    this.bookings=resp;
  })
}

changeBookingStatus(bookingId:number,status:string){
  console.log("Entra en el metodo de la clase")
this.isSpinning=true;
this.adminService.changeBookingStatus(bookingId,status).subscribe((resp)=>{
  this.isSpinning=false;
  this.getBookings();
  this.message.success("Estado de la reserva cambiado a "+status,{ nzDuration:5000});

},_error=>{

  this.message.error("No se pudo actualizar el estado de la reserva",{nzDuration:5000});
})
}


}
