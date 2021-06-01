import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyInfoService } from 'app/service/company-info.service';

@Component({
  selector: 'app-detail-education',
  templateUrl: './detail-education.component.html',
  styleUrls: ['./detail-education.component.css']
})
export class DetailEducationComponent implements OnInit {

  eduDetailInfo: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetailEducationComponent>,
    public eduService: CompanyInfoService
  ) { }

  ngOnInit(): void {
    // console.log("a");
    if (this.data) {
      this.eduService.getEducationById(this.data).subscribe(res => {
        if (res) {
          this.eduDetailInfo = res;
        }
      })
    }
  }

}