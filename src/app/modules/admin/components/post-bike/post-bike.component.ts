import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-bike',
  templateUrl: './post-bike.component.html',
  styleUrls: ['./post-bike.component.scss']
})
export class PostBikeComponent {

postBikeForm!: FormGroup;
isSpinning:boolean=false;
selectedFile!:File;
imagePreview!:string | ArrayBuffer | null;
listOfBrands = ["Scott","Orbea","Bh","Cannodale","Trek","Cannodale"];
listOfType=["MountainBike","RoadBike","Ciclocross","Gravel","Paseo"];
listOftransmission = ["Electrica","Manual"];

constructor(private fb:FormBuilder,private adminService:AdminService,private message:NzMessageService,private router:Router){}

ngOnInit(){
  this.postBikeForm=this.fb.group({
    name:[null,Validators.required],
    brand:[null,Validators.required],
    type:[null,Validators.required],
    transmision:[null,Validators.required],
    precio:[null,Validators.required]
  })
}

postBike(){
  console.log(this.postBikeForm.value);
  this.isSpinning=true;
  const formData:FormData = new FormData();
  formData.append('image',this.selectedFile);
  formData.append('brand',this.postBikeForm.get('brand')?.value);
  formData.append('name',this.postBikeForm.get('name')?.value);
  formData.append('precio',this.postBikeForm.get('precio')?.value);
  formData.append('type',this.postBikeForm.get('type')?.value);
  formData.append('transmision',this.postBikeForm.get('transmision')?.value); 
  this.adminService.postBike(formData).subscribe((resp)=>{
    this.isSpinning=false;
    this.message.success("Bike creada con exito",{nzDuration:5000});
    this.router.navigateByUrl("/admin/dashboard");
   //console.log(resp);   
  },error=>{
    console.log(error);
    this.message.error("Error al crear Bike"),{nzDuration:5000}
  });
}


onFileSelected(event:any){
this.selectedFile = event?.target.files[0];
this.previewImage();
}

previewImage(){
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
  }
  reader.readAsDataURL(this.selectedFile);
}


}
