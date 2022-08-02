import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliserCommandeComponent } from './finaliser-commande.component';

describe('FinaliserCommandeComponent', () => {
  let component: FinaliserCommandeComponent;
  let fixture: ComponentFixture<FinaliserCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaliserCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaliserCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
