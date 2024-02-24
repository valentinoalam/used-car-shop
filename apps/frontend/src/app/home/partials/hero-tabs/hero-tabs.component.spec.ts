import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTabsComponent } from './hero-tabs.component';

describe('HeroTabsComponent', () => {
  let component: HeroTabsComponent;
  let fixture: ComponentFixture<HeroTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
