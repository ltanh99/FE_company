import { Component, OnInit } from '@angular/core';
import { GetRecruitmentService } from 'app/pages/recruitment/service/get-recruitment.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {

  educateInfo = {
    name: null,
    speaker: null,
    startDate: null,
    max: null,
    contact: null,
    linkLive: null,
    description: null,
  };
  time: any;
  userInfo: any;
  constructor(
    public educationService: GetRecruitmentService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    if (localStorage.getItem("common-info")) {
      this.userInfo = JSON.parse(localStorage.getItem("common-info"));
    }
  }

  addEducation () {
    if (this.educateInfo && this.userInfo) {
      let dateString;
      if (this.educateInfo.startDate && new Date(this.educateInfo.startDate)) {
        dateString = this.buildDateString(new Date(this.educateInfo.startDate));
      }
      let body = {
        "address": this.userInfo.address,
        "companyId": this.userInfo.company.id,
        "linkLive": this.educateInfo.linkLive,
        "messageId": "educate"+this.userInfo.company.id,
        "name": this.educateInfo.name,
        "speaker": this.educateInfo.speaker,
        "startDate": dateString ? dateString: null
      };
      this.educationService.addEducation(body).subscribe(res => {
        if (res) {
          console.log(res);
        }
      })
    }
  }


  buildDateString(date: Date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() + '';
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1) + '';
    const year = date.getFullYear() + '';
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() + '';
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() + '';
    const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds() + '';

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  }

}
