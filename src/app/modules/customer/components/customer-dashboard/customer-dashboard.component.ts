import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

bikes:any=[];

isCustomerloggedIn:boolean = StorageService.isCustomerLoggedIn();
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
