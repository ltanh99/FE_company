import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReComponent } from './detail-re.component';

describe('DetailReComponent', () => {
  let component: DetailReComponent;
  let fixture: ComponentFixture<DetailReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
