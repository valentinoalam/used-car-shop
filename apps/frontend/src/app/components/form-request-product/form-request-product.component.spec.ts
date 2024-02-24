import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRequestProductComponent } from './form-request-product.component';

describe('FormRequestProductComponent', () => {
  let component: FormRequestProductComponent;
  let fixture: ComponentFixture<FormRequestProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRequestProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRequestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
