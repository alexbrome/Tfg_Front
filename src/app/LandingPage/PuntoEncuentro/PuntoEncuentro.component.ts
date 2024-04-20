import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiembroService } from '../Miembro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PuntoEncuentro',
  templateUrl: './PuntoEncuentro.component.html',
  styleUrls: ['./PuntoEncuentro.component.css']
})
export class PuntoEncuentroComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private miembroService:MiembroService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      
    });
  }


submitForm(){
 
  this.miembroService.register(this.validateForm.value).subscribe(()=>{
    Swal.fire({
      title: "<strong>Te has registrado como miembro de nuestro club!!Para entrar en el grupo de Whatsapp escanea este codigo</u></strong>",
      icon: "info",
      html: `
       <img src="../../../assets/frame.png"/>
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      
      cancelButtonAriaLabel: "Thumbs down"
    });
  })
}

}
