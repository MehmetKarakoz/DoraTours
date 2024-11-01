import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmreComponent } from './umre.component';

describe('UmreComponent', () => {
  let component: UmreComponent;
  let fixture: ComponentFixture<UmreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
