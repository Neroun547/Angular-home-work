import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiderFirstComponent } from './slaider-first.component';

describe('SlaiderFirstComponent', () => {
  let component: SlaiderFirstComponent;
  let fixture: ComponentFixture<SlaiderFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaiderFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
