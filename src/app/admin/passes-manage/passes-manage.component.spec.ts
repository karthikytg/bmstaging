import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassesManageComponent } from './passes-manage.component';

describe('PassesManageComponent', () => {
  let component: PassesManageComponent;
  let fixture: ComponentFixture<PassesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassesManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
