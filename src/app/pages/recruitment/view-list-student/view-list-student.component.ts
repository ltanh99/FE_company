import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-list-student',
  templateUrl: './view-list-student.component.html',
  styleUrls: ['./view-list-student.component.css']
})
export class ViewListStudentComponent implements OnInit {

  applyInfo: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {data: any},
    public dialogRef: MatDialogRef<ViewListStudentComponent>,

  ) { }

  ngOnInit(): void {
    this.applyInfo = this.data;
    this.applyInfo?.rows?.forEach(element => {
      if (element?.cvUrl) {
        let arraySpl = element.cvUrl.split("/");
        element.cvName = arraySpl[arraySpl.length - 1];
      }
    });
  }

}
