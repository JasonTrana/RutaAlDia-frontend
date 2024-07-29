import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutaMenuPage } from './ruta-menu.page';

describe('RutaMenuPage', () => {
  let component: RutaMenuPage;
  let fixture: ComponentFixture<RutaMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
