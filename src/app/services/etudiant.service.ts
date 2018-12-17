import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
getEtudiants(){
  return this.http.get('http://localhost:3000/api/etudiants');
}
addEtudiant(etudiant:Etudiant){
  const etudiantData = new FormData();
  etudiantData.append("fullname",etudiant.fullname);
  etudiantData.append("cin",etudiant.cin);
  etudiantData.append("cne",etudiant.cne);
  etudiantData.append("anscol",etudiant.anscol);
  etudiantData.append("filiere",etudiant.filiere);
  etudiantData.append("email",etudiant.email);
  etudiantData.append("image",etudiant.image);
  return this.http.post('http://localhost:3000/api/etudiants',etudiantData);
}
getEtudiant(id:String){
  return this.http.get(`http://localhost:3000/api/etudiants/${id}`);
}
addNotes(etudiant:Etudiant){
  return this.http.put(`http://localhost:3000/api/etudiants/${etudiant._id}`,etudiant);
}
getEtudiantNotes(id:String){
  return this.http.get(`http://localhost:3000/api/etudiants/${id}/notes`);
}
editEtudiant(etudiant:Etudiant){
  return this.http.put(`http://localhost:3000/api/etudiants/${etudiant._id}`,etudiant);
}
deleteEtudiant(id:String){
  return this.http.delete(`http://localhost:3000/api/etudiants/${id}`);
}
}
