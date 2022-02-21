import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export enum angularNotifierModel {
  warn = 'warning',
  default = 'default',
  success = 'success',
  error = 'error',
  info = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private successModal: any;
  ProfileActive: boolean = false;
  constructor(private sanitizer: DomSanitizer) { }

  public get IsProfileActive(): boolean {
    return this.ProfileActive;
  }

  public set IsProfileActive(v: boolean) {
    this.ProfileActive = v;
  }


  setModal(modal: any) {
    this.successModal = modal
  }
  showVideoModal(src: string) {
    let viu = document.getElementById('vidapp') as HTMLVideoElement
    viu.src = src
    this.successModal.show()
    viu.play()
  }
  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  setToken(token: string) {
    localStorage.setItem('token', token)
  }
  getToken() {
    return localStorage.getItem('token') as string
  }
}
