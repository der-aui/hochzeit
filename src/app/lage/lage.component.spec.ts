import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LageComponent } from './lage.component';

describe('LageComponent', () => {
  let component: LageComponent;
  let fixture: ComponentFixture<LageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
