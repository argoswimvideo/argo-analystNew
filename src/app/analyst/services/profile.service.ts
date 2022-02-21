import { Injectable } from '@angular/core';
import { bankDetails } from '../models/bankDetail.model';
import apiEndPoints from '../shared/apiEndpoints';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpService) { }
  addBankDetails(req: bankDetails) {
    return this.http.post(req, apiEndPoints.profile.AddbankDetails)
  }
  addProfilePhoto(request: any) {
    return this.http.put(request, apiEndPoints.profile.AddProfilePhoto)
  }
}
