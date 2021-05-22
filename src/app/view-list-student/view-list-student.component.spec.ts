import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListStudentComponent } from './view-list-student.component';

describe('ViewListStudentComponent', () => {
  let component: ViewListStudentComponent;
  let fixture: ComponentFixture<ViewListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
