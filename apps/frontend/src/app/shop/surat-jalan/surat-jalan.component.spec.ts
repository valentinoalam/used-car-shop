import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratJalanComponent } from './surat-jalan.component';

describe('SuratJalanComponent', () => {
  let component: SuratJalanComponent;
  let fixture: ComponentFixture<SuratJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuratJalanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuratJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
