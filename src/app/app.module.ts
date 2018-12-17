import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component'
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowEtudiantComponent } from './components/show-etudiant/show-etudiant.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component'
@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    NavbarComponent,
    AddEtudiantComponent,
    ShowEtudiantComponent,
    AddNoteComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
