import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  form: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  
  company = localStorage.getItem("common-info");
  companyName =  JSON.parse(this.company).fullName;
  ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormControl("", null),
      description: new FormControl("", null),
      year: new FormControl("", null),
      scale: new FormControl("", null),
      videoUrl: new FormControl("", null),
    })

    console.log(this.data);
    if (this.data) {
      this.form.setValue({
        address: this.data?.company?.user?.address,
        description: this.data?.company?.description,
        year: this.data?.company?.year,
        scale: this.data?.company?.scale,
        videoUrl: null,
      })
    }
  }

}
