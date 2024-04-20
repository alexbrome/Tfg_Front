import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})


export class MiembroService {

 

constructor(private http:HttpClient) { }


register(member:any):Observable<any>{
  console.log(member)
  return this.http.post(BASE_URL+"/api/member",member)
}

}
