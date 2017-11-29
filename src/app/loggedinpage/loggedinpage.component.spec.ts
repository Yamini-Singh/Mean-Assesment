import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinpageComponent } from './loggedinpage.component';

describe('LoggedinpageComponent', () => {
  let component: LoggedinpageComponent;
  let fixture: ComponentFixture<LoggedinpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
