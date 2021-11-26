import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getReq(path){
    return this.http.get(`${environment.url}/${path}`)
  }

  postReq(path, data){
    return this.http.post(`${environment.url}/${path}`, data)
  }
}
