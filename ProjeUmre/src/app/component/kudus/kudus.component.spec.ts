import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudusComponent } from './kudus.component';

describe('KudusComponent', () => {
  let component: KudusComponent;
  let fixture: ComponentFixture<KudusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KudusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KudusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
