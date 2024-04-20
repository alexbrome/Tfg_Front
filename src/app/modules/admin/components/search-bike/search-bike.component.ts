import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMNService, NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-bike',
  templateUrl: './search-bike.component.html',
  styleUrls: ['./search-bike.component.scss']
})
export class SearchBikeComponent implements OnInit{


listaMensajes:any[];

constructor(private adminService:AdminService){

}
  ngOnInit(): void {
    this.getMensajesContacto();
   console.log(this.listaMensajes);
  }



getMensajesContacto(){
  
  this.adminService.getMensajesContacto().subscribe((resp)=>{
    console.log(resp);
    this.listaMensajes=resp;
    console.log(this.listaMensajes)
  })
}

enviarCorreo(email:any) {
  const emailEncoded = encodeURIComponent(email);
  console.log(emailEncoded);
  // URL de correo electrónico con el destinatario, asunto y cuerpo predefinidos
  const emailUrl = "mailto:"+emailEncoded+"?subject=Respuesta a su mensaje de Aracena Adventures&body=Gracias por contactar con nosotros, respecto a su mensaje...";
  // Abrir el cliente de correo electrónico predeterminado
  window.location.href = emailUrl;
 
}


}




/*private fb:FormBuilder,private service:AdminService){
  /*this.searchBikeForm = this.fb.group({
    brand:[null],
    type:[null],
    transmision:[null]
  })*/
/*
searchBikeForm!:FormGroup;
isSpinning:boolean=false;
listfOption:Array<{label:string;value:string}>=[];
listOfBrands = ["Scott","Orbea","Bh","Cannodale","Trek","Cannodale"];
listOfType=["MountainBike","RoadBike","Ciclocross","Gravel","Paseo"];
listOftransmission = ["Electrica","Manual"];
bikes:any = [];
*/
/*
searchBike(){
  this.isSpinning=true;
  this.bikes = [];
  this.service.searchBike(this.searchBikeForm.value).subscribe((resp)=>{
    resp.bikeDtoList.forEach((element: any)=>{
      element.proccesedImg = 'data:image/jpeg;base64,' + element.returnedImage;
      this.bikes.push(element);
    })
    this.isSpinning=false;
  })

}
*/

