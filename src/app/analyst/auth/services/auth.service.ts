import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import apiEndPoints from '../../shared/apiEndpoints';
apiEndPoints

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }
  login(request: any) {
    return this.http.post(request, apiEndPoints.auth.loginEndpoint)
  }
  signup(request: any) {
    return this.http.post(request, apiEndPoints.auth.signupEndpoint)
  }
}
