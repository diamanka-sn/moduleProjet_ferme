import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliserCommandeLaitComponent } from './finaliser-commande-lait.component';

describe('FinaliserCommandeLaitComponent', () => {
  let component: FinaliserCommandeLaitComponent;
  let fixture: ComponentFixture<FinaliserCommandeLaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaliserCommandeLaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaliserCommandeLaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
