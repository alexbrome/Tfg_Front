import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './auth/components/singup/singup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ContactoComponent } from './LandingPage/Contacto/Contacto.component';
import { ServiciosComponent } from './LandingPage/ServiciosPage/Servicios.component';
import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { MainPageComponent } from './LandingPage/MainPage/MainPage.component';
import { PuntoEncuentroComponent } from './LandingPage/PuntoEncuentro/PuntoEncuentro.component';

const routes: Routes = [
{ path:"register",component:SingupComponent},
{ path:"login",component:LoginComponent},
{ path:"admin",loadChildren: () => import("./modules/admin/admin.module").then(m=>m.AdminModule) },
{ path:"customer",loadChildren:  () => import("./modules/customer/customer.module").then(m=>m.CustomerModule)},
{ path:"contacto",component:ContactoComponent },
{ path:"servicios",component:ServiciosComponent },
{ path:"dashboard",component:CustomerDashboardComponent},
{ path:"puntoEncuentro",component:PuntoEncuentroComponent},
{ path:"",component:MainPageComponent}
//{ path:"*",redirectTo:"",pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
