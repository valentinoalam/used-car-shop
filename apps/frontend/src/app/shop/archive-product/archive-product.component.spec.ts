import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProductComponent } from './archive-product.component';

describe('ArchiveProductComponent', () => {
  let component: ArchiveProductComponent;
  let fixture: ComponentFixture<ArchiveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
