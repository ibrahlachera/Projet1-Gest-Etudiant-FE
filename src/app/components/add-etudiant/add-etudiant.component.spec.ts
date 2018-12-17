import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantComponent } from './add-etudiant.component';

describe('AddEtudiantComponent', () => {
  let component: AddEtudiantComponent;
  let fixture: ComponentFixture<AddEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
