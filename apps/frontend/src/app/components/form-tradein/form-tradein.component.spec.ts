import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTradeinComponent } from './form-tradein.component';

describe('FormTradeinComponent', () => {
  let component: FormTradeinComponent;
  let fixture: ComponentFixture<FormTradeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTradeinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTradeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
