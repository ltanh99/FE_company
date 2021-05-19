import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { news } from 'app/ts/news';
import { GetInfoService} from '../../service/get-info.service';
import {enableProdMode} from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'tin-td-cmp',
  moduleId: module.id,
  templateUrl: './tin-td.component.html',
  styleUrls: ['./tin-td.component.css']
})
export class TinTdComponent implements OnInit {

  tintd= [
    
  ];
  constructor() { }

  ngOnInit(): void {
    // this.getNews();
    console.log(this.tintd);
  }

  // getNews (){
  //   this.news.getNews().subscribe(res => this.tintd = res);
    
  //}
  public get half(): number {
    return Math.ceil(this.tintd.length / 2);
}
  toggle = true;
  toggleSearch = false;
  toggleHeart() {
    this.toggle = !this.toggle;
}
  clickSearch() {
    this.toggleSearch = !this.toggleSearch;
  }
}
