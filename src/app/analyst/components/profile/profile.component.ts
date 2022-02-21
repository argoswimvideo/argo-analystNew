import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { bankDetails } from '../../models/bankDetail.model';
import { angularNotifierModel, HelperService } from '../../services/helper.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  discription: string = `Set up your profile now... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna `
  screenController: number = 7
  personalInfoForm!: FormGroup;
  bankInfoForm!: FormGroup;
  CVFile: any;
  profilePhoto1: any;
  validPhotoType = ['image/png', 'image/jpeg', 'image/jpg']
  constructor(private helper: HelperService, private profileS: ProfileService, private notify: NotifierService) { }
  profilePhoto: any

  sampleWorkArr: any = []
  ngOnInit(): void {
    this.helper.IsProfileActive = true
    fetch("assets/images/Argo Swim Logo1.png")
      .then(function (response) {
        return response.blob()
      })
      .then((blob) => {
        //this.profilePhoto = blob
        this.helper.getBase64(blob).then(data => {
          this.profilePhoto = data
          //console.log(this.profilePhoto)
        })
      });
    this.initForms()
    localStorage.getItem("ProfileControl") ? this.screenController = Number(localStorage.getItem("ProfileControl")) : localStorage.setItem("ProfileControl", "7");
  }
  initForms() {
    this.personalInfoForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      passwrd: new FormControl('', [Validators.required]),
      cellPhone: new FormControl('', [Validators.required]),
      mailingAddress: new FormControl('', [Validators.required])
    })
    this.bankInfoForm = new FormGroup({
      achNumber: new FormControl('', [Validators.required]),
      routingNumber: new FormControl('', [Validators.required]),
      accNumber: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required])
    })
  }
  handleFile(e: any, fileType: number) {
    if (fileType == 1) {
      if (!this.validPhotoType.includes(e.target.files[0].type)) {
        this.notify.notify(angularNotifierModel.error, 'Enter valid Image type')
        return;
      }
      this.profilePhoto1 = e.target.files[0];
      //this.profilePhoto = this.helper.sanitize(URL.createObjectURL(e.target.files[0]))
      this.helper.getBase64(e.target.files[0]).then(data => {
        this.profilePhoto = data

      })
    }
    if (fileType == 2) {
      //this.CVFile = this.helper.sanitize(URL.createObjectURL(e.target.files[0]))
      this.helper.getBase64(e.target.files[0]).then(data => {
        this.CVFile = data
      })
    }
    if (fileType == 3) {
      this.sampleWorkArr.push(1)
    }
  }

  uploadPhoto(screenNumber: number) {
    let formData = new FormData();
    formData.append('image', this.profilePhoto1)
    this.profileS.addProfilePhoto(formData).subscribe(res => {
      this.screenController = screenNumber
      this.setScreenController(this.screenController)
      console.log(res)
    })
  }

  changeScreen(ScreenNumber: number) {
    switch (ScreenNumber) {
      case 1:
        this.screenController = ScreenNumber
        this.setScreenController(this.screenController)
        break;

      case 2:
        this.uploadPhoto(ScreenNumber)
        break;

      case 3:
        this.screenController = ScreenNumber
        this.setScreenController(this.screenController)
        break;

      case 4:
        this.addBankDetails(ScreenNumber)
        break;

      case 5:
        this.screenController = ScreenNumber
        this.setScreenController(this.screenController)
        break;

      case 6:
        this.screenController = ScreenNumber
        this.setScreenController(this.screenController)
        break;

      case 7:
        this.screenController = ScreenNumber
        this.setScreenController(this.screenController)
        break;

        case 8:
          this.screenController = ScreenNumber
          this.setScreenController(this.screenController)
          break;

      default:
        break;
    }
  }

  addBankDetails(screenindex: number) {
    let bankform = this.bankInfoForm.value
    let obj: bankDetails = { accountnumber: bankform.accNumber, achnumber: bankform.achNumber, routingnumber: bankform.routingNumber, bankname: bankform.bankName }
    this.profileS.addBankDetails(obj).subscribe((res: any) => {
      this.screenController = screenindex
      this.setScreenController(this.screenController)
    })
  }

  setScreenController(screenIndex: number) {
    localStorage.setItem("ProfileControl", screenIndex.toString())
  }

}
