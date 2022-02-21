import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(body: any, endPoint: string) {
    return this.http.post(endPoint, body);
  }
  put(body: any, endPoint: string) {
    return this.http.put(endPoint, body);
  }
}
