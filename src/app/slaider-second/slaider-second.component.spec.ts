import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiderSecondComponent } from './slaider-second.component';

describe('SlaiderSecondComponent', () => {
  let component: SlaiderSecondComponent;
  let fixture: ComponentFixture<SlaiderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaiderSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
