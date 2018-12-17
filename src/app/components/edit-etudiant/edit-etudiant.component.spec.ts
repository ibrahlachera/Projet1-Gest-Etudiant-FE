import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtudiantComponent } from './edit-etudiant.component';

describe('EditEtudiantComponent', () => {
  let component: EditEtudiantComponent;
  let fixture: ComponentFixture<EditEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
