import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recruitment } from '../recruitment';
import { GetRecruitmentService } from '../service/get-recruitment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: any;
  constructor(public postRecruitment: GetRecruitmentService,
    private toastr: ToastrService,
    public router: Router
    ) { }

  campaignOne: FormGroup;
  public recruitment: any;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("common-info"));
    this.recruitment = {
      "companyId": this.user?this.user.company.id:0,
      "content": "",
      "description": "",
      "endTime": "",
      "formOfWork": "",
      "income": 0,
      "interest": "",
      "messageId": "",
      "name": "",
      "quantity": 0,
      "requirePosition": "",
      "specialistId":1,
      "startTime": new Date(),
      "workingPosition": "",
      "workplace": ""
    }
  }
  onSubmit(){
    if (this.recruitment.income) {
      this.recruitment.income = +this.recruitment.income;
    }
    if (this.recruitment.quantity) {
      this.recruitment.quantity = +this.recruitment.quantity;
    }
    // if (this.recruitment.content) {
    //   this.recruitment.description = this.recruitment.content;
    // }
    this.postRecruitment.postRecruitment(this.recruitment).subscribe(res => {
      // console.log(res);
      if (res) {
        this.toastr.success( 'Thêm mới việc làm thành công');
        this.router.navigate(['tin-tuyen-dung']);
      }
    }, error => {
      this.toastr.error( 'Có lỗi xảy ra, vui lòng thử lại sau!');
    })
    // console.log(this.recruitment.name);
  }
}
