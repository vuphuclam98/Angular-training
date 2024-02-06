import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerServiceComponent } from './logger-service.component';

describe('LoggerServiceComponent', () => {
  let component: LoggerServiceComponent;
  let fixture: ComponentFixture<LoggerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
