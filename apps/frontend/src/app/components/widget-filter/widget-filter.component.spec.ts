import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFilterComponent } from './widget-filter.component';

describe('WidgetFilterComponent', () => {
  let component: WidgetFilterComponent;
  let fixture: ComponentFixture<WidgetFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
