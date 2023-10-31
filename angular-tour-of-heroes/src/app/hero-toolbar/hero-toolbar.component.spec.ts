import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroToolbarComponent } from './hero-toolbar.component';

describe('HeroToolbarComponent', () => {
  let component: HeroToolbarComponent;
  let fixture: ComponentFixture<HeroToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroToolbarComponent]
    });
    fixture = TestBed.createComponent(HeroToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
