import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyInfoService } from 'app/service/company-info.service';
import { AddEduComponent } from './add-edu/add-edu.component';
import { DetailEducationComponent } from './detail-education/detail-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  listSeminar: Array<any>;
  toggleSearch = false;
  constructor(
    public dialog: MatDialog,
    public eduService: CompanyInfoService
  ) { }

  ngOnInit(): void {
    // this.listSeminar = [1,2,3]
    let user = JSON.parse(localStorage.getItem("common-info"));
    this.eduService.getEducation(user?.company?.id).subscribe(res => {
      if (res) {
        this.listSeminar = res.rows;
      }
    })
  }


  viewDetail(e) {
    console.log(e);
    let dialogRef = this.dialog.open(DetailEducationComponent, {
      width: '500px',
      height: '400px',
      data: e.id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  add() {
    let dialogRef = this.dialog.open(AddEduComponent, {
      width: '600px',
      height: '530px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  clickSearch() {
    this.toggleSearch = !this.toggleSearch;
  }

}