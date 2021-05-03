import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruitment } from '../recruitment';

@Injectable({
  providedIn: 'root'
})
export class GetRecruitmentService {

  private apiGetRecuitment: string = "http://202.92.4.184:8585/RecruitmentAPI/api/v1/jobs"
  constructor(private http: HttpClient) { }

  
  getRecruitment(): Observable<any>{
    return this.http.get (this.apiGetRecuitment);
  }
  postRecruitment(recruitment: Recruitment): Observable<any>{
    const body = recruitment;
    return this.http.post (this.apiGetRecuitment, body);
  }
}
