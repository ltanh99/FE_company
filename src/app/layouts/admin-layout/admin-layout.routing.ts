import { Routes } from '@angular/router';


import { TinTdComponent} from '../../pages/news/tin-td.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { NewsDetailComponent } from 'app/pages/news-detail/news-detail.component';
import { StudentInfoComponent } from 'app/pages/student-info/student-info.component';
import { NewsSaveComponent } from 'app/pages/news-save/news-save.component';
import { CompanyComponent } from 'app/pages/company/company.component';
import { CompanyDetailComponent } from 'app/pages/company/company-detail/company-detail.component';
import { EducationComponent } from 'app/pages/education/education.component';
import { MessageComponent } from 'app/pages/message/message.component';
import { RecruitmentComponent } from 'app/pages/recruitment/recruitment.component';
import { AddComponent } from 'app/pages/recruitment/add/add.component';
import { DetailReComponent } from 'app/pages/recruitment/detail-re/detail-re.component';
import { ViewStudentComponent } from 'app/pages/recruitment/detail-re/view-student/view-student.component';
import { CompanyInfoComponent } from 'app/pages/company-info/company-info.component';
import { AddEduComponent } from 'app/pages/education/add-edu/add-edu.component';
import { RatesComponent } from 'app/pages/rates/rates.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'gioi-thieu', component: CompanyInfoComponent},
    { path: 'tin-tuyen-dung',          component: RecruitmentComponent },
    { path: 'tin-tuyen-dung/them-moi',   component: AddComponent},
    { path: 'tin-tuyen-dung/chi-tiet', component: DetailReComponent},
    { path: 'xem-danh-sach-sinh-vien', component: ViewStudentComponent},
    { path: 'cong-viec/chi-tiet',     component: NewsDetailComponent},
    { path: 'cong-viec-da-luu',     component: NewsSaveComponent},
    { path: 'cong-ty',        component: CompanyComponent},
    { path: 'cong-ty/chi-tiet',        component: CompanyDetailComponent},
    { path: "danh-gia", component: RatesComponent},
    { path: 'dao-tao',        component: EducationComponent},
    { path: 'dao-tao/them-moi', component: AddEduComponent},
    { path: 'tin-nhan',        component: MessageComponent},

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
