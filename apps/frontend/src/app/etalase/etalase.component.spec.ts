import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtalaseComponent } from './etalase.component';

describe('EtalaseComponent', () => {
  let component: EtalaseComponent;
  let fixture: ComponentFixture<EtalaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtalaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtalaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
