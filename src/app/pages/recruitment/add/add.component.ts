import { Component, OnInit } from '@angular/core';
import { Recruitment } from '../recruitment';
import { GetRecruitmentService } from '../service/get-recruitment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public postRecruitment: GetRecruitmentService) { }

  public recruitment: Recruitment;
  ngOnInit(): void {
    this.recruitment = {
      id : 10,
      name: "abc",
      content: "aaa",
      description: "a"
    }
  }
  onSubmit(){
    this.postRecruitment.postRecruitment(this.recruitment).subscribe(res => {
      console.log(res);
    })
    console.log(this.recruitment.name);
  }
}
