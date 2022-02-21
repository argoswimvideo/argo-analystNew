import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  tab: number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tab: number) {
    this.tab = tab
  }
}
