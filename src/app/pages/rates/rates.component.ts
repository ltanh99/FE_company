import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  listRates = [];
  userInfo: any;
  constructor() { }

  ngOnInit(): void {
    this.getInfo();
    this.listRates = this.userInfo?.company.rates;
    this.listRates.forEach(item => {
      if (item && item.namePerson) {
        let nameArray = item.namePerson.split(" ");
        item.avatar = nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0);
        item.color = this.getRandomColor();
      }
    })
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getInfo() {
    if (localStorage.getItem("common-info")) {
      this.userInfo = JSON.parse(localStorage.getItem("common-info"));
    }
  }

}
