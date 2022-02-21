import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type: string = 'password'
  signUpForm!: FormGroup;
  loading: boolean = false

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    })
  }
  changeType(type: string) {
    this.type = type
  }

  Signup() {
    this.loading = true
    console.log(this.signUpForm.value)
    let requestObj = {
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value,
      firstname: this.signUpForm.get('firstName')?.value,
      lastname: this.signUpForm.get('lastName')?.value,
      phone: this.signUpForm.get('phone')?.value,
    }
    this.auth.signup(requestObj).subscribe((res: any) => {
      console.log(res)
      this.route.navigateByUrl('/')
    }, (err) => {
      console.log(err)
    }).add(() => {
      this.loading = false
    })
  }
}
