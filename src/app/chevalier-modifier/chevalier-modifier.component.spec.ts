import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalierModifierComponent } from './chevalier-modifier.component';

describe('ChevalierModifierComponent', () => {
  let component: ChevalierModifierComponent;
  let fixture: ComponentFixture<ChevalierModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevalierModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevalierModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
