import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }
  work = "CHUYÊN VIÊN TƯ VẤN PHẦN MỀM/ THIẾT KẾ WEBSITE - UPTO 15 TRIỆU";
  fullname = "Lê Tuấn Anh";
  gender = "Nữ";
  birthday = "27/12/1999";
  ngOnInit(): void {
  }

}
