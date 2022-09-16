import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackInfoComponent } from './update-track-info.component';

describe('UpdateTrackInfoComponent', () => {
  let component: UpdateTrackInfoComponent;
  let fixture: ComponentFixture<UpdateTrackInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrackInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
