import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import apiEndPoints from '../shared/apiEndpoints';
import { HelperService } from './helper.service';
const anonymousRequests = [apiEndPoints.auth.loginEndpoint, apiEndPoints.auth.signupEndpoint]
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private helper: HelperService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!anonymousRequests.includes(req.url)) {
      return next.handle(req.clone({ setHeaders: { 'x-access-token': this.helper.getToken() } }));
    }
    else {
      return next.handle(req.clone({}));
    }
  }
}
