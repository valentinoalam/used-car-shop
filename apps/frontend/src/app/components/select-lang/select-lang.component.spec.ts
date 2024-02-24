import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLangComponent } from './select-lang.component';

describe('SelectLangComponent', () => {
  let component: SelectLangComponent;
  let fixture: ComponentFixture<SelectLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
