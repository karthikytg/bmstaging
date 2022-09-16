import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralManageComponent } from './referral-manage.component';

describe('ReferralManageComponent', () => {
  let component: ReferralManageComponent;
  let fixture: ComponentFixture<ReferralManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
