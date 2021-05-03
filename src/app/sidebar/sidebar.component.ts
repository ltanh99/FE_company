import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/gioi-thieu',     title: 'Giới thiệu',         icon:'fas fa-university',       class: '' },
    { path: '/tin-tuyen-dung',         title: 'Tin tuyển dụng',             icon:'fas fa-laptop-code',    class: '' },
    { path: '/danh-gia',          title: 'Đánh giá',              icon:'fas fa-heart',      class: '' },
    { path: '/dao-tao',          title: 'Đào tạo',      icon:'fas fa-book-open',  class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-icon nc-bell-55',    class: '' },
    { path: '/tin-nhan', title: 'Tin nhắn',     icon:'fas fa-sms',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-icon nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
