import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component'
import { CustomerRoutingModule } from './customer-routing.module';
import { BookBikeComponent } from './components/customer-dashboard/book-bike/book-bike.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MyBookingsComponent } from './components/customer-dashboard/my-bookings/my-bookings.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';

//external
import { NgxPayPalModule } from 'ngx-paypal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookBikeComponent,
    MyBookingsComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NzDatePickerModule ,
    NzCardModule,
    NzTableModule,
    NgxPayPalModule,
    NzPaginationModule
   
   
    
  ]
})
export class CustomerModule { }
