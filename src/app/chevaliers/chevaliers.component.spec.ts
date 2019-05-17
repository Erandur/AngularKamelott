import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevaliersComponent } from './chevaliers.component';

describe('ChevaliersComponent', () => {
  let component: ChevaliersComponent;
  let fixture: ComponentFixture<ChevaliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevaliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevaliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
