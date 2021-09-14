import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumoMerchantComponent } from './humo-merchant.component';

describe('HumoMerchantComponent', () => {
  let component: HumoMerchantComponent;
  let fixture: ComponentFixture<HumoMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumoMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumoMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
