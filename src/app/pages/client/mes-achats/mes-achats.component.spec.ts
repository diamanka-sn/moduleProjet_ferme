import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAchatsComponent } from './mes-achats.component';

describe('MesAchatsComponent', () => {
  let component: MesAchatsComponent;
  let fixture: ComponentFixture<MesAchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesAchatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
