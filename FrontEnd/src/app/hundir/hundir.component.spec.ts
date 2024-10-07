import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HundirComponent } from './hundir.component';

describe('HundirComponent', () => {
  let component: HundirComponent;
  let fixture: ComponentFixture<HundirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HundirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HundirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
