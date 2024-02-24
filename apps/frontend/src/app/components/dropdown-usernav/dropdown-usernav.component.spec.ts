import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsernavComponent } from './dropdown-usernav.component';

describe('DropdownUsernavComponent', () => {
  let component: DropdownUsernavComponent;
  let fixture: ComponentFixture<DropdownUsernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownUsernavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownUsernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
