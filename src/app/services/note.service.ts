import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  ajouterNote(note:Note){
    return this.http.post('http://localhost:3000/api/notes',note);
  }
}
