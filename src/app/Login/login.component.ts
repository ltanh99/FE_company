import { EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataServiceService } from 'app/service/data-service.service';
import { Student } from '../ts/student';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private studentService: LoginService, 
    public router: Router,
    private toastr: ToastrService,
    public dataService: DataServiceService) { }


   public student = new Student();
   public userName;
   public companyName;
  ngOnInit(): void {
    this.student.username = '';
    this.student.password = '';
    this.setLocalStorage();
  
  }

  login(student: Student){

    if(this.student.username == ""){
      this.toastr.error('Vui lòng nhập tên đăng nhập!');
    }else 
    if(this.student.password == ""){
      this.toastr.error('Vui lòng nhập mật khẩu!');
    }else{

    let token1: string;
    this.studentService.studentLogin(this.student).subscribe(res => {
      console.log(this.student.username);
      console.log(res);
      if (res.username && res.isCompany) {
        localStorage.setItem('session', '');
        localStorage.setItem('common-info', '');
        let now = new Date();
        localStorage.setItem('session', this.addMinutes(now, 30).getTime().toString());
        localStorage.setItem('common-info', JSON.stringify(res));
        this.router.navigate(['tin-tuyen-dung']);
        this.dataService.setMessage(res);
      } else {
        this.toastr.error('Tên đăng nhập hoặc mật khẩu không đúng');
      }

    },
  error => {
    this.toastr.error('Tên đăng nhập hoặc mật khẩu không đúng');
    // this.notifier.notify('error', 'Đăng nhập thất bại');
  }) 
  }
}

  addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }

  setLocalStorage(){
    localStorage.setItem('token', '');
    localStorage.setItem('userName', '');
    localStorage.setItem('password', '');
  }
}
