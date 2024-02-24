import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFindComponent } from './widget-find.component';

describe('WidgetFindComponent', () => {
  let component: WidgetFindComponent;
  let fixture: ComponentFixture<WidgetFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetFindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
