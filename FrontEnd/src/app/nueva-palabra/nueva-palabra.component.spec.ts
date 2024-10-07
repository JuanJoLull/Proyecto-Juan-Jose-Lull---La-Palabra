import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPalabraComponent } from './nueva-palabra.component';

describe('NuevaPalabraComponent', () => {
  let component: NuevaPalabraComponent;
  let fixture: ComponentFixture<NuevaPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaPalabraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
