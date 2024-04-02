import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

bikes:any=[];


  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getAllBikes();
  }


  getAllBikes(){
    this.customerService.getAllBikes().subscribe((res)=>{     
      res.forEach((element: { proccesedImg: string; returnedImage: string; }) => {
        element.proccesedImg='data:image/jpeg;base64,' + element.returnedImage;
        this.bikes.push(element)  
      });
    })
  }


}