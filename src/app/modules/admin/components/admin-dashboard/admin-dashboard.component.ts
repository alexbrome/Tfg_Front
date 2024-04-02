import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

bikes:any = [];

constructor(private adminService:AdminService,private message:NzMessageService,private modalService:NzModalService){}

ngOnInit(){
this.getAllBikes();
}

/*getAllBikes(){
  this.adminService.getAllBikes().subscribe((res)=>{
   
    res.forEach((element: { processedImg: string; returnedImage: string; }) => {
      element.processedImg='data:image/jpeg;base64,' + element.returnedImage;
      this.bikes.push(element)
    }); console.log(res);
  })
}*/

getAllBikes() {
  this.adminService.getAllBikes().subscribe((res) => {
    console.log(res);
    this.bikes = res.map((element: { returnedImage: string }) => {
      return {
        ...element,
        processedImg: 'data:image/jpeg;base64,' + element.returnedImage
      };
    });
  });
}

  deleteBike(id: number): void {
    this.modalService.confirm({
      nzTitle: '¿Estás seguro?',
      nzContent: 'Esta acción no se puede deshacer',
      nzOkText: 'Sí',
      
      nzOnOk: () => {
        this.adminService.deleteBike(id).subscribe(
          (res) => {
            this.bikes = [];
            this.getAllBikes();
            this.message.success("Bike borrada con éxito", { nzDuration: 5000 });
          },
          (error) => {
            console.error(error);
            this.message.error("Error al borrar la Bike", { nzDuration: 5000 });
          }
        );
      },
      nzCancelText: 'No'
    });
  }

}



