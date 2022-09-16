import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidGetinComponent } from './bid-getin.component';

describe('BidGetinComponent', () => {
  let component: BidGetinComponent;
  let fixture: ComponentFixture<BidGetinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidGetinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidGetinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
