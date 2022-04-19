import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPageComponent } from './gestion-page.component';

describe('GestionPageComponent', () => {
  let component: GestionPageComponent;
  let fixture: ComponentFixture<GestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
