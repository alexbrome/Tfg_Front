import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-bike',
  templateUrl: './update-bike.component.html',
  styleUrls: ['./update-bike.component.scss']
})
export class UpdateBikeComponent {

isSpinning:boolean=false;
bikeId:number=this.activatedRoute.snapshot.params["id"];
existingImage:string | null = null;
updateForm!:FormGroup;
listOfBrands = ["Scott","Orbea","Bh","Cannodale","Trek","Cannodale"];
listOfType=["MountainBike","RoadBike","Ciclocross","Gravel","Paseo"];
listOfTransmision = ["Electrica","Manual"];
imgChanged:boolean=true;
selectedFile:any;
imagePreview!:string|ArrayBuffer|null;

constructor(private adminService:AdminService,private activatedRoute:ActivatedRoute,
  private fb:FormBuilder,private message:NzMessageService,private router:Router){}

ngOnInit(){
  this.updateForm = this.fb.group({
    name:[null,Validators.required],
    brand:[null,Validators.required],
    type:[null,Validators.required],
    transmision:[null,Validators.required],
    precio:[null,Validators.required]
    
  })
  this.getBikeById(this.bikeId);
}


getBikeById(id:number){
  this.isSpinning=true;
  return this.adminService.getBikeById(this.bikeId).subscribe((res)=>{
    this.isSpinning=false;
 const bikeDto = res;
 this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
 console.log(bikeDto);
 this.updateForm.patchValue(bikeDto);
  })
}

updateBike(){
 
  this.isSpinning=true;
  const formData:FormData = new FormData();
  if(this.imgChanged && this.selectedFile)
  {
    formData.append('image',this.selectedFile)
}
  formData.append('brand',this.updateForm.get('brand')?.value);
  formData.append('name',this.updateForm.get('name')?.value);
  formData.append('precio',this.updateForm.get('precio')?.value);
  formData.append('type',this.updateForm.get('type')?.value);
  formData.append('transmision',this.updateForm.get('transmision')?.value); 
  this.adminService.updateBike(this.bikeId,formData).subscribe((resp)=>{
    this.isSpinning=false;
    this.message.success("Bike actualizada con exito",{nzDuration:5000});
    this.router.navigateByUrl("/admin/dashboard");
   //console.log(resp);   
  },error=>{
    console.log(error);
    this.message.error("Error al actualizar Bike"),{nzDuration:5000}
  });
}



onFileSelected(event:any){
  this.selectedFile = event.target.files[0];
  this.imgChanged = true ;
  this.existingImage = null;
  this.previewImage();
}

previewImage(){
  const reader = new FileReader();
  reader.onload =()=>{
    this.imagePreview = reader.result;
  }
  reader.readAsDataURL(this.selectedFile);
}
}
