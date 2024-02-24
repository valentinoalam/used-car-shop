import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JualComponent } from './jual.component';

describe('JualComponent', () => {
  let component: JualComponent;
  let fixture: ComponentFixture<JualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
