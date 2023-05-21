import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateAnteproyectoComponent } from './crate-anteproyecto.component';

describe('CrateAnteproyectoComponent', () => {
  let component: CrateAnteproyectoComponent;
  let fixture: ComponentFixture<CrateAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateAnteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
