import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookBikeComponent } from './components/customer-dashboard/book-bike/book-bike.component';
import { MyBookingsComponent } from './components/customer-dashboard/my-bookings/my-bookings.component';
import { SearchBikeComponent } from '../admin/components/search-bike/search-bike.component';

const routes: Routes = [
  { path:"dashboard", component:CustomerDashboardComponent },
  { path:"book/:id",component:BookBikeComponent },
  { path:"my_bookings",component:MyBookingsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
