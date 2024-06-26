import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/components/login/login.component';
import { SingupComponent } from './auth/components/singup/singup.component';
         
          //NgZorro imports
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroImportsModule } from './NgZorroImportsModule';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ServiciosComponent } from './LandingPage/ServiciosPage/Servicios.component';
import { PuntoEncuentroComponent } from './LandingPage/PuntoEncuentro/PuntoEncuentro.component';
import { ContactoComponent } from './LandingPage/Contacto/Contacto.component';




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ServiciosComponent,
    PuntoEncuentroComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NgZorroImportsModule,
    NzButtonModule,
    RouterModule,
    NzTableModule
   
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
