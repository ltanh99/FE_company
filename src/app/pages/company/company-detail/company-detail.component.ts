import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  isIntroTab = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(e) {
    if (e == 0) {
      this.isIntroTab = true;
    } else {
      this.isIntroTab = false;
    }
  }

}
