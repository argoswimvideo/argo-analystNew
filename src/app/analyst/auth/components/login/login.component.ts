import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/analyst/services/helper.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = 'password'
  loginForm!: FormGroup;
  loading: boolean = false

  constructor(private auth: AuthService, private helper: HelperService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  changeType(type: string) {
    this.type = type
  }

  login() {
    this.loading = true
    console.log(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    let requestObj = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.auth.login(requestObj).subscribe((res: any) => {
      console.log(res)
      this.helper.setToken(res.token)
      res?.data?.isverified == 0 ? this.route.navigateByUrl('analyst/profile') : this.route.navigateByUrl('/analyst')
    }, (err) => {
      console.log(err)
    }).add(() => {
      this.loading = false
    })
  }
}
