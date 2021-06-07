import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GetRecruitmentService} from './service/get-recruitment.service';
import { AddComponent } from './add/add.component';
import { Recruitment } from './recruitment';
import { Router } from '@angular/router';
import { ViewListStudentComponent } from './view-list-student/view-list-student.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  searchValue: any;
  constructor( public dialog: MatDialog,
    private toastr: ToastrService,
    private getRecruitmentService: GetRecruitmentService,
    public router: Router) { }

  public recruitment = [];
  // add() {
  //   console.log(1);
  //   let dialogRef = this.dialog.open(AddComponent, {
  //     width: '800px',
  //     height: '500px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  ngOnInit(): void {
    this.getRecruitmentList();
  }

  getRecruitmentList(){
    let user = JSON.parse(localStorage.getItem("common-info"));
    this.getRecruitmentService.getRecruitment(user?.company?.id).subscribe(res => {
      console.log(res);
      this.recruitment = res.rows;
      this.recruitment.forEach((element:any) => {
        this.getRecruitmentService.getCandidatesByJob(element["id"]).subscribe(res => {
          if (res) {
            console.log(res);
            // let total = res['total'];
            element.apply = res;
          }
        })
      })
    })
  }

  search() {
    let searchRecruitment = [];
    if (this.searchValue) {
      if (this.recruitment && this.recruitment.length > 0) {
        this.recruitment.forEach(element => {
          if (this.compare(this.searchValue,element?.name) > 0 || this.compare(this.searchValue,element?.formOfWork) > 0 || this.compare(this.searchValue,element?.workingPosition) > 0) {
            searchRecruitment.push(element);
          }
        })

        this.recruitment = searchRecruitment;
      }
    } else {
      this.getRecruitmentList();
    }

    // console.log(searchRecruitment);
  }

  compare(strA,strB){
    if (strA && strB) {
      for(var result = 0, i = strA.length; i--;){
        if(typeof strB[i] == 'undefined' || strA[i] == strB[i]) var a: any;
        else if(strA[i].toLowerCase() == strB[i].toLowerCase())
            result++;
        else  
            result += 4;
    }
    return 1 - (result + 4*Math.abs(strA.length - strB.length))/(2*(strA.length+strB.length));
    } else {
      return 0;
    }
    
  }

  openPageAdd(){
    this.router.navigate(['tin-tuyen-dung/them-moi']);
  }

  viewListStudent(dataApply){
    let dialogRef = this.dialog.open(ViewListStudentComponent, {
      width: '800px',
      height: '500px',
      data: dataApply
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showDetail(jobId) {
    this.router.navigate(['tin-tuyen-dung/chi-tiet'],{queryParams: {id: jobId}})
  }

  gotoChat(item) {
    this.router.navigate(['tin-nhan'],{queryParams: {id: 'job'+item.id,name: item.name}})
  }

  deleteJob(item) {
    this.getRecruitmentService.deleteJob(item).subscribe(res => {
        this.getRecruitmentList();
        this.toastr.success("Xoá công việc thành công")
    }, error => {
      this.toastr.error("Xóa công việc thất bại");
    })
  }
}
