import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRecruitmentService } from '../service/get-recruitment.service';

@Component({
  selector: 'app-detail-re',
  templateUrl: './detail-re.component.html',
  styleUrls: ['./detail-re.component.css']
})
export class DetailReComponent implements OnInit {

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

}
