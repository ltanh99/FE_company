import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyInfoService } from 'app/service/company-info.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  form: any;
  constructor(
    private companyService: CompanyInfoService,
    public dialogRef: MatDialogRef<EditInfoComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) { }
  c = {
    address: this.data?.company?.user?.address,
    avatarUrl: this.data?.company?.avatarUrl,
    backgroundUrl: this.data.company.backgroundUrl,
    description: this.data?.company?.description,
    email: this.data.email,
    fullName: this.data.fullName,
    introduce: this.data?.company?.introduce,
    mobile: this.data.mobile,
    scale: this.data?.company?.scale,
    videoUrl: this.data?.company?.videoUrl,
    year: this.data?.company?.year
  }
  company = localStorage.getItem("common-info");
  companyInfo = JSON.parse(this.company);
  companyName =  JSON.parse(this.company).fullName;
  ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormControl("", null),
      introduce: new FormControl("", null),
      description: new FormControl("", null),
      year: new FormControl("", null),
      scale: new FormControl("", null),
      videoUrl: new FormControl("", null),
    })

    console.log(this.data);
    if (this.data) {
      this.form.setValue({
        address: this.data?.company?.user?.address,
        introduce: this.data?.company?.introduce,
        description: this.data?.company?.description,
        year: this.data?.company?.year,
        scale: this.data?.company?.scale,
        videoUrl: this.data?.company?.videoUrl,
      })
    }
  }
  submit() {
    if (this.c) {
      let dateString;
      let body = {
        "address": this.c.address,
        "avatarUrl": this.c.avatarUrl,
        "backgroundUrl": this.c.backgroundUrl,
        "description": this.c.description,
        "email": this.c.email,
        "fullName": this.c.fullName,
        "introduce": this.c.introduce,
        "mobile": this.c.mobile,
        "scale": this.c.scale,
        "videoUrl": this.c.videoUrl,
        "year": this.c.year,
      };
      this.companyService.updateCompany(body, this.companyInfo.company.id).subscribe(res => {
        if (res) {
          this.toastr.success('Sửa thông tin thành công!');
          console.log(res);

          this.dialogRef.close();
        } else {
          this.toastr.error('Đã xảy ra lỗi, vui lòng thử lại sau!');
        }

      }, error => {
        this.toastr.error('Đã xảy ra lỗi, vui lòng thử lại sau!');
      })
  

      }

    }

}
