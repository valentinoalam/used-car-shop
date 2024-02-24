import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPartnerComponent } from './icon-partner.component';

describe('IconPartnerComponent', () => {
  let component: IconPartnerComponent;
  let fixture: ComponentFixture<IconPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
