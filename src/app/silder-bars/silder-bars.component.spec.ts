import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderBarsComponent } from './silder-bars.component';

describe('SilderBarsComponent', () => {
  let component: SilderBarsComponent;
  let fixture: ComponentFixture<SilderBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilderBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilderBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
