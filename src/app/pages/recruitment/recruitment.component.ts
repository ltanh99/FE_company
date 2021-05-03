import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GetRecruitmentService} from './service/get-recruitment.service';
import { AddComponent } from './add/add.component';
import { Recruitment } from './recruitment';
import { Router } from '@angular/router';

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
    this.getRecruitmentService.getRecruitment().subscribe(res => {
      console.log(res);
      this.recruitment = res.rows;
    })

  }
  openPageAdd(){
    this.router.navigate(['tin-tuyen-dung/them-moi']);
  }
}
