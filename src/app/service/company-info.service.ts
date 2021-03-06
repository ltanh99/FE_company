import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  private apiUrl: string = "http://202.92.4.184:8585/RecruitmentAPI/";
  constructor(private http: HttpClient) { }

  companyLogin(param): Observable<any>{
    return this.http.get(this.apiUrl+"api/v1/authentication/login?username="+param.username+"&password="+param.password);
  }

  getCompanyById(id): Observable<any> {
    return this.http.get(this.apiUrl+"api/v1/companies/"+id);
  }

  getEducation(id, page = 1, size = 50, searchValue = ""): Observable<any> {
    return this.http.get(this.apiUrl + 'api/v1/educates/companies/'+id+'/educates' + '?page=' + page + '&limit=' + size + '&searchValue=' + searchValue);
  }

  getEducationById(id): Observable<any> {
    return this.http.get(this.apiUrl + 'api/v1/educates/' + id);
  }
  updateCompany(user, id): Observable<any> {
    return this.http.put(this.apiUrl + 'api/v1/companies/' + id, user);
  }
}
