import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


postBike(bikeDto:any):Observable<any>{
  return this.http.post(BASIC_URL+ "/api/admin/bike",bikeDto,{
    headers:this.createAthorizationHeader()
  });

}

getAllBikes():Observable<any>{
  return this.http.get(BASIC_URL + "/api/admin/bikes",{
    headers:this.createAthorizationHeader()
  })
}

updateBike(bikeId:number,bikeDto:any):Observable<any>{
  return this.http.put(BASIC_URL+"/api/admin/bike/"+bikeId,bikeDto,{
    headers: this.createAthorizationHeader()
  });
}

getBikeBookings():Observable<any>{
  return this.http.get(BASIC_URL + "/api/admin/bike/bookings",{
    headers:this.createAthorizationHeader()
  })
}

changeBookingStatus(bookingId:number,status:string):Observable<any>{
  console.log("entra en e servicio");
  return this.http.get(BASIC_URL + `/api/admin/bike/booking/${bookingId}/${status}`,{
    headers:this.createAthorizationHeader()
  })
}


deleteBike(id:number):Observable<any>{
  
  return this.http.delete(BASIC_URL+"/api/admin/bike/"+id,{
    headers: this.createAthorizationHeader()
  });

}

getBikeById(id:number):Observable<any>{
  return this.http.get(BASIC_URL+"/api/admin/bike/"+id,{
    headers:this.createAthorizationHeader()
  });
}

searchBike(searchBikeDto:any):Observable<any>{
return this.http.post(BASIC_URL+"/api/admin/bike/search",searchBikeDto,{
  headers: this.createAthorizationHeader()
});
}


createAthorizationHeader():HttpHeaders{
  let authHeaders : HttpHeaders = new HttpHeaders();
  return authHeaders.set(
    'Authorization',
    'Bearer ' +  StorageService.getToken()
  );
}

getMensajesContacto():Observable<any>{
  
  return this.http.get(BASIC_URL + "/api/mensaje",{
    headers:this.createAthorizationHeader()
  })
}

postMensajeContacto(mensajeContacto:any):Observable<any>{
  return this.http.post(BASIC_URL+ "/api/mensaje/save",mensajeContacto,{
    headers:this.createAthorizationHeader()
  });

}


}
