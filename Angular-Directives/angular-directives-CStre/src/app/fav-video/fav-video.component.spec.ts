import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavVideoComponent } from './fav-video.component';

describe('FavVideoComponent', () => {
  let component: FavVideoComponent;
  let fixture: ComponentFixture<FavVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
