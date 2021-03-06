import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { StudentInfoComponent } from './pages/student-info/student-info.component';
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { NewsSaveComponent } from './pages/news-save/news-save.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyDetailComponent } from './pages/company/company-detail/company-detail.component';
import {MatDialogActions, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserModule } from "@angular/platform-browser";
// import { EducationComponent } from './pages/education/education.component';
// import { DetailEducationComponent } from './pages/education/detail-education/detail-education.component';
import { ChangePasswordComponent } from './pages/student-info/change-password/change-password.component';
import { EducationComponent } from './pages/education/education.component';
import { DetailEducationComponent } from './pages/education/detail-education/detail-education.component';
import { MessageComponent } from './pages/message/message.component';
import { IntroductionComponent } from './pages/company/introduction/introduction.component';
import { NewsOfCompanyComponent } from "./pages/company/news-of-company/news-of-company.component";
import { ApplyComponent } from './pages/news-detail/apply/apply.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { AddComponent } from './pages/recruitment/add/add.component';
import { DetailReComponent } from './pages/recruitment/detail-re/detail-re.component';
import { ViewStudentComponent } from './pages/recruitment/detail-re/view-student/view-student.component';
import { StudentDetailComponent } from './pages/recruitment/detail-re/view-student/student-detail/student-detail.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { EditInfoComponent } from './pages/company-info/edit-info/edit-info.component';
import { AddEduComponent } from "./pages/education/add-edu/add-edu.component";
import { MatNativeDateModule} from "@angular/material/core";
import { SafePipeModule } from 'safe-pipe';
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { RatesComponent } from './pages/rates/rates.component';
import { ViewListStudentComponent } from './pages/recruitment/view-list-student/view-list-student.component';
import { LinkEducationComponent } from './pages/education/link-education/link-education.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    NewsDetailComponent,
    StudentInfoComponent,
    NewsSaveComponent,
    EducationComponent,
    DetailEducationComponent,
    ChangePasswordComponent,
    CompanyComponent,
    CompanyDetailComponent,
    IntroductionComponent,
    NewsOfCompanyComponent,
    ApplyComponent,
    AddComponent,
    DetailReComponent,
    ViewStudentComponent,
    StudentDetailComponent,
    CompanyInfoComponent,
    EditInfoComponent,
    AddEduComponent,
    RatesComponent,
    MessageComponent,
    RecruitmentComponent,
    ViewListStudentComponent,
    LinkEducationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
    FooterModule,
    FixedPluginModule,
    // NgbModule,
    // FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    // MatDialogActions,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    SafePipeModule
  ],
  entryComponents: [
    // DetailEducationComponent,
    ChangePasswordComponent
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
