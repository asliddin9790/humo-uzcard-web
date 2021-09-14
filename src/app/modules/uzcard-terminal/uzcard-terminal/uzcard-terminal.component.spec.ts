import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzcardTerminalComponent } from './uzcard-terminal.component';

describe('UzcardTerminalComponent', () => {
  let component: UzcardTerminalComponent;
  let fixture: ComponentFixture<UzcardTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzcardTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzcardTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
