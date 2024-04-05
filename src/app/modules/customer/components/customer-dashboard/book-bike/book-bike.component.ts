import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import Swal from 'sweetalert2';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

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
public payPalConfig?:IPayPalConfig;


constructor(private service:CustomerService,private activatedRoute:ActivatedRoute,
  private fb:FormBuilder,private message:NzMessageService,private router:Router){}

ngOnInit(){
  console.log(this.bike);
  this.initConfig();
  this.validateForm = this.fb.group({
    toDate:[null,Validators.required],
    fromDate:[null,Validators.required],
  })
this.getBikeById();
}

//Paypal
private initConfig(): void {
  this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AV5ynTZZIxkoeFGBNoRZKRTPAsokwYjtrJoWRBWy7jbOLYSrWG9CEes9UCXmHikmrLSBmUlLefw9twKy',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                  breakdown: {
                      item_total: {
                          currency_code: 'EUR',
                          value: '9.99'
                      }
                  }
              },
              items: [{
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'EUR',
                      value: '9.99',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then((details: any) => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
         

      },
      onError: err => {
          console.log('OnError', err);
         
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
         
      }
  };
}



bookBike(data:any){


  Swal.fire({
    title: "Estas seguro de reservar la Bike? ",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
       /*Aqui va la logica de payal*/ 

      let bookBikeDto = {      
        toDate:data.toDate,
        fromDate:data.fromDate,
        userId:StorageService.getUserId(),
        bikeId:this.bikeId
      }
      this.service.bookBike(bookBikeDto).subscribe((resp) => {
        //this.message.success("Bike Reservada", { nzDuration: 5000 });
        this.router.navigateByUrl("/customer/dashboard");
      }, _error => {
        this.message.error("No se pudo reservar la bike", { nzDuration: 5000 });
      })
      Swal.fire("Cuando recibamos el pago quedara reservada tu bike!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Cambios sin guardar", "", "info");
    }
  });

}

getBikeById(){
this.service.getBikeById(this.bikeId).subscribe((resp)=>{
this.processedImage = 'data:image7jpeg;base64,' + resp.returnedImage;
this.bike = resp;
console.log(this.bike);
  })
}



}
