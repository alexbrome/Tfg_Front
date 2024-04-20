import { Component } from '@angular/core';
import { StorageService } from './auth/services/storage/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BikerentalFront';
  isCustomerloggedIn:boolean = StorageService.isCustomerLoggedIn();
  isAdminLoggedIn:boolean = StorageService.isAdminLoggedIn();

   constructor(private router:Router){}


ngOnInit(){
  this.router.events.subscribe(event=>{
    if(event.constructor.name === "NavigationEnd"){
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      this.isCustomerloggedIn = StorageService.isCustomerLoggedIn();
    }
  })
}


logout() {
  Swal.fire({
    title: "Estas seguro de cerrar sesión? ",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Cerrar sesión y redirigir a la página de inicio
      StorageService.logout();
      this.router.navigateByUrl("/");
    } else if (result.isDenied) {
      Swal.fire("Acción cancelada", "", "info");
    }
  });
}


}
