import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdGovComponent } from './dd-gov.component';

describe('DdGovComponent', () => {
  let component: DdGovComponent;
  let fixture: ComponentFixture<DdGovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdGovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
