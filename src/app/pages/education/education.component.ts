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
          if (this.similarity(this.searchData,element?.name) > 0 || this.similarity(this.searchData,element?.formOfWork) > 0 || this.similarity(this.searchData,element?.workingPosition) > 0) {
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
  similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
  }

  editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
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