import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumoContactsComponent } from './humo-contacts.component';

describe('HumoContactsComponent', () => {
  let component: HumoContactsComponent;
  let fixture: ComponentFixture<HumoContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumoContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumoContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
