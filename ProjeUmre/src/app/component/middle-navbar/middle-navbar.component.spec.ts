import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleNavbarComponent } from './middle-navbar.component';

describe('MiddleNavbarComponent', () => {
  let component: MiddleNavbarComponent;
  let fixture: ComponentFixture<MiddleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
