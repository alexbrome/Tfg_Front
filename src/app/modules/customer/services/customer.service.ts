import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';



const BASIC_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http:HttpClient ) { }


getEmailByUserId(idNumber:number):Observable<any>{
  console.log(idNumber);
  return this.http.get(BASIC_URL + "/api/customer/bike/bookings/email/" + idNumber,{
    headers:this.createAthorizationHeader()
  })
}

getAllBikes():Observable<any>{
  return this.http.get(BASIC_URL + "/api/customer/bikes",{
    headers:this.createAthorizationHeader()
  })
}

getBikeById(bikeId:number):Observable<any>{
  return this.http.get(BASIC_URL + "/api/customer/bike/" + bikeId,{
    headers:this.createAthorizationHeader()
  });
}

bookBike(bookBikeDto:any):Observable<any>{
  console.log("entra en el metodo del servicio");
  return this.http.post(BASIC_URL + "/api/customer/bike/book",bookBikeDto,{
    headers:this.createAthorizationHeader()
  });
}


getBookingByUserId():Observable<any>{
  console.log(StorageService.getUserId());
  return this.http.get(BASIC_URL + "/api/customer/bike/bookings/" + StorageService.getUserId(),{
    headers:this.createAthorizationHeader()
  });
}


createAthorizationHeader():HttpHeaders{
  let authHeaders : HttpHeaders = new HttpHeaders();
  return authHeaders.set(
    'Authorization',
    'Bearer ' +  StorageService.getToken()
  );
}

getBookingsByUserId():Observable<any>{
  return this.http.get(BASIC_URL + "api/customer/bike/bookings/" + StorageService.getUserId(),
  {headers:this.createAthorizationHeader()});
}

}



