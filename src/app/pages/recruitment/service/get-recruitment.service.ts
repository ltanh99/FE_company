import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruitment } from '../recruitment';

@Injectable({
  providedIn: 'root'
})
export class GetRecruitmentService {

  private apiGetRecuitment: string = "http://202.92.4.184:8585/RecruitmentAPI"
  constructor(private http: HttpClient) { }

  
  getRecruitment(id): Observable<any>{
    return this.http.get (this.apiGetRecuitment+"/api/v1/jobs/companies/"+id+"/jobs");
  }
  postRecruitment(recruitment: Recruitment): Observable<any>{
    const body = recruitment;
    return this.http.post (this.apiGetRecuitment + "/api/v1/jobs", body);
  }
}
