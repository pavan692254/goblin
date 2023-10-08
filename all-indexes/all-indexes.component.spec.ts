import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndexesComponent } from './all-indexes.component';

describe('AllIndexesComponent', () => {
  let component: AllIndexesComponent;
  let fixture: ComponentFixture<AllIndexesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllIndexesComponent]
    });
    fixture = TestBed.createComponent(AllIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
