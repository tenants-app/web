import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesEditionComponent } from './duties-edition.component';

describe('DutiesEditionComponent', () => {
  let component: DutiesEditionComponent;
  let fixture: ComponentFixture<DutiesEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutiesEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
