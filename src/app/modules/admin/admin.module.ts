import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PostBikeComponent } from './components/post-bike/post-bike.component';


import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgZorroImportsModule } from 'src/app/NgZorroImportsModule';
import { UpdateBikeComponent } from './components/update-bike/update-bike.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchBikeComponent } from './components/search-bike/search-bike.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostBikeComponent,
    UpdateBikeComponent,
    GetBookingsComponent,
    SearchBikeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
   NzSpinModule,
   NzFormModule,
   NzSelectModule,
   NzButtonModule,
   ReactiveFormsModule,
   NzModalModule

  
    
   
   
  
  
    
  ]
})
export class AdminModule { }
