import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFlashComponent } from './sale-flash.component';

describe('SaleFlashComponent', () => {
  let component: SaleFlashComponent;
  let fixture: ComponentFixture<SaleFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleFlashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
