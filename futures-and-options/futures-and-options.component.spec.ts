import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesAndOptionsComponent } from './futures-and-options.component';

describe('FuturesAndOptionsComponent', () => {
  let component: FuturesAndOptionsComponent;
  let fixture: ComponentFixture<FuturesAndOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuturesAndOptionsComponent]
    });
    fixture = TestBed.createComponent(FuturesAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
