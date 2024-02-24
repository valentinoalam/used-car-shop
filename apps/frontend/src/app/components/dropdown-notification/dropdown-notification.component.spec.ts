import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNotificationComponent } from './dropdown-notification.component';

describe('DropdownNotificationComponent', () => {
  let component: DropdownNotificationComponent;
  let fixture: ComponentFixture<DropdownNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
