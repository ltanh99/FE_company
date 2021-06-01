import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GetRecruitmentService} from './service/get-recruitment.service';
import { AddComponent } from './add/add.component';
import { Recruitment } from './recruitment';
import { Router } from '@angular/router';
import { ViewListStudentComponent } from './view-list-student/view-list-student.component';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor( public dialog: MatDialog,
    private getRecruitmentService: GetRecruitmentService,
    public router: Router) { }

  public recruitment: [];
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
}
