import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMNService, NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-bike',
  templateUrl: './search-bike.component.html',
  styleUrls: ['./search-bike.component.scss']
})
export class SearchBikeComponent {

searchBikeForm!:FormGroup;
isSpinning:boolean=false;
listfOption:Array<{label:string;value:string}>=[];
listOfBrands = ["Scott","Orbea","Bh","Cannodale","Trek","Cannodale"];
listOfType=["MountainBike","RoadBike","Ciclocross","Gravel","Paseo"];
listOftransmission = ["Electrica","Manual"];
bikes:any = [];


constructor(private fb:FormBuilder,private service:AdminService,private message:NzMessageService){
  this.searchBikeForm = this.fb.group({
    brand:[null],
    type:[null],
    transmision:[null]
  })
}

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

}
