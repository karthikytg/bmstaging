import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidplaceComponent } from './bidplace.component';

describe('BidplaceComponent', () => {
  let component: BidplaceComponent;
  let fixture: ComponentFixture<BidplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
