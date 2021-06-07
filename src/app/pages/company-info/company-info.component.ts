import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CompanyInfoService } from 'app/service/company-info.service';
import { EditInfoComponent } from './edit-info/edit-info.component';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  userInfo;
  detailInfo;
  videoUrl;
  form: any;
  constructor(public dialog: MatDialog,
    public companyInfoService: CompanyInfoService) { }
    //company: any;
    // companyInfo: any;
  ngOnInit(): void {
    // this.company = localStorage.getItem("common-info");
    // this.companyInfoService.companyLogin(JSON.parse(this.company)).subscribe(res => {
      // localStorage.setItem('session', '');
                  // localStorage.setItem('common-info', '');
                  // let now = new Date();
      // localStorage.setItem('session', this.addMinutes(now, 30).getTime().toString());
                    // localStorage.setItem('common-info', JSON.stringify(res));
      // this.router.navigate(['cong-viec']);
      // this.dataService.setMessage(res);
    //   this.companyInfo = res;
    // })

    this.getInfo();
    this.companyInfoService.getCompanyById(this.userInfo.company.id).subscribe(res =>{
      this.detailInfo = res;
      console.log(this.detailInfo.company.videoUrl);
    })

    // this.form = new FormGroup({
    //   studentName: new FormControl('', null),
    //   studentCode: new FormControl('', null),
    //   gender: new FormControl('', null),
    //   birthday: new FormControl('', null),
    //   email: new FormControl('', null),
    //   address: new FormControl('', null)
    // });

    
  }

  getInfo() {
    if (localStorage.getItem("common-info")) {
      this.userInfo = JSON.parse(localStorage.getItem("common-info"));
    }
  }


  openPopupEdit( detailInfo ) {

    let dialogRef = this.dialog.open(EditInfoComponent, {
      width: '800px',
      height: '500px',
      data: detailInfo,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
