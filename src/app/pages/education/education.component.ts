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
  searchData: any;
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

  search() {
    let searchRecruitment = [];
    let user = JSON.parse(localStorage.getItem("common-info"));
    if (this.searchData) {
      if (this.listSeminar && this.listSeminar.length > 0) {
        this.listSeminar.forEach(element => {
          if (this.compare(this.searchData,element?.name) > 0 || this.compare(this.searchData,element?.formOfWork) > 0 || this.compare(this.searchData,element?.workingPosition) > 0) {
            searchRecruitment.push(element);
          }
        })

        this.listSeminar = searchRecruitment;
      }
    } else {
      this.eduService.getEducation(user?.company?.id).subscribe(res => {
        if (res) {
          this.listSeminar = res.rows;
        }
      })
    }
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
      height: '560px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  clickSearch() {
    this.toggleSearch = !this.toggleSearch;
  }

}