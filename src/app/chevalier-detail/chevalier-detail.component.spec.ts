import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalierDetailComponent } from './chevalier-detail.component';

describe('ChevalierDetailComponent', () => {
  let component: ChevalierDetailComponent;
  let fixture: ComponentFixture<ChevalierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevalierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevalierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
