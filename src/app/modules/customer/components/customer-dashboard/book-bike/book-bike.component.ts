import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-book-bike',
  templateUrl: './book-bike.component.html',
  styleUrls: ['./book-bike.component.scss']
})
export class BookBikeComponent {

bikeId:number=this.activatedRoute.snapshot.params["id"];
bike:any;
processedImage:any;
validateForm!:FormGroup;
isSpinning:boolean=false;
dateFormat:string="dd/MM/YYYY";


constructor(private service:CustomerService,private activatedRoute:ActivatedRoute,
  private fb:FormBuilder,private message:NzMessageService,private router:Router){}

ngOnInit(){
  this.validateForm = this.fb.group({
    toDate:[null,Validators.required],
    fromDate:[null,Validators.required],
  })
this.getBikeById();
}

bookBike(data:any){
  console.log(data);
this.isSpinning=true;
let bookBikeDto = {
  toDate:data.toDate,
  fromDate:data.fromDate,
  userId:StorageService.getUserId(),
  bikeId:this.bikeId
}
this.service.bookBike(bookBikeDto).subscribe((resp) => {
  this.message.success("Bike Reservada", { nzDuration: 5000 });
  this.router.navigateByUrl("/customer/dashboard");
}, _error => {
  this.message.error("No se pudo reservar la bike", { nzDuration: 5000 });
})
}




getBikeById(){
  this.service.getBikeById(this.bikeId).subscribe((resp)=>{
console.log(resp);
this.processedImage = 'data:image7jpeg;base64,' + resp.returnedImage;
this.bike = resp;
  })
}



}
