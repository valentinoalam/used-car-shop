import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSellComponent } from './widget-sell.component';

describe('WidgetSellComponent', () => {
  let component: WidgetSellComponent;
  let fixture: ComponentFixture<WidgetSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
