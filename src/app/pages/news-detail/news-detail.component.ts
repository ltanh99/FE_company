import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRecruitmentService } from '../recruitment/service/get-recruitment.service';
import { ApplyComponent } from './apply/apply.component';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  jobId: any;
  dataDetail: any;
  constructor(private dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    private getRecruitmentService: GetRecruitmentService,
    ) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.queryParamMap.get('id');
    this.getRecruitmentService.getJobById(this.jobId).subscribe(res => {
      this.dataDetail = res;
    })
  }
  openDialog(){
    let dialogRef = this.dialog.open(ApplyComponent, {
      width: '800px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
