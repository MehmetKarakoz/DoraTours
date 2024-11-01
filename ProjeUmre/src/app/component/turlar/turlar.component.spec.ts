import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurlarComponent } from './turlar.component';

describe('TurlarComponent', () => {
  let component: TurlarComponent;
  let fixture: ComponentFixture<TurlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
