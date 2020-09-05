import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEnvasesYreciclajeComponent } from './contenido-envases-yreciclaje.component';

describe('ContenidoEnvasesYreciclajeComponent', () => {
  let component: ContenidoEnvasesYreciclajeComponent;
  let fixture: ComponentFixture<ContenidoEnvasesYreciclajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoEnvasesYreciclajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEnvasesYreciclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
