import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdIndustriesComponent } from './dd-industries.component';

describe('DdIndustriesComponent', () => {
  let component: DdIndustriesComponent;
  let fixture: ComponentFixture<DdIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdIndustriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
