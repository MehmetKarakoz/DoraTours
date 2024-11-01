import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurlaCardsComponent } from './turla-cards.component';

describe('TurlaCardsComponent', () => {
  let component: TurlaCardsComponent;
  let fixture: ComponentFixture<TurlaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurlaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurlaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
