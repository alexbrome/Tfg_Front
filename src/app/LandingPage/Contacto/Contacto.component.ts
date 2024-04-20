import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Contacto',
  templateUrl: './Contacto.component.html',
  styleUrls: ['./Contacto.component.css']
})
export class ContactoComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mensaje: [null, [Validators.required, Validators.required]],
      
    });
  }

  onSubmit(){
    console.log(this.validateForm.value);
  this.adminService.postMensajeContacto(this.validateForm.value).subscribe((resp)=>{
    Swal.fire("Mensaje enviado con exito!");
  })

}


}
