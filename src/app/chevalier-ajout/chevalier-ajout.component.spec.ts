import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalierAjoutComponent } from './chevalier-ajout.component';

describe('ChevalierAjoutComponent', () => {
  let component: ChevalierAjoutComponent;
  let fixture: ComponentFixture<ChevalierAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevalierAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevalierAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
