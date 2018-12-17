import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { ShowEtudiantComponent } from './components/show-etudiant/show-etudiant.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"etudiants",component:EtudiantComponent,canActivate:[AuthGuard]},
  {path:"etudiants/add",component:AddEtudiantComponent,canActivate:[AuthGuard]},
  {path:"etudiants/show/:id",component:ShowEtudiantComponent,canActivate:[AuthGuard]},
  {path:"etudiants/edit/:id",component:EditEtudiantComponent,canActivate:[AuthGuard]},
  {path:"etudiants/addnote/:id",component:AddNoteComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
