import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenLoansComponent } from './given-loans.component';

describe('GivenLoansComponent', () => {
  let component: GivenLoansComponent;
  let fixture: ComponentFixture<GivenLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
