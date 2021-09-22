import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumoFileProsessingComponent } from './humo-file-prosessing.component';

describe('HumoFileProsessingComponent', () => {
  let component: HumoFileProsessingComponent;
  let fixture: ComponentFixture<HumoFileProsessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumoFileProsessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumoFileProsessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
