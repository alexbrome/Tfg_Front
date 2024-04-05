import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './auth/components/singup/singup.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
{ path:"register",component:SingupComponent},
{ path:"login",component:LoginComponent},
{ path:"admin",loadChildren: () => import("./modules/admin/admin.module").then(m=>m.AdminModule) },
{ path:"customer",loadChildren:  () => import("./modules/customer/customer.module").then(m=>m.CustomerModule)},
{ path:"*",redirectTo:"",pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
