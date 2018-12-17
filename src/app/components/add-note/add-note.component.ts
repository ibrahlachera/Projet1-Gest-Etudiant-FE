import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

etudiant:Etudiant = {
  _id:"",
  notes:[{}]
}
notes:Note={
  etudiant_id:"",
  matiere : "",
  semestre : "",
  note :0
}
  constructor(private etudiantService:EtudiantService,private noteService:NoteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.etudiantService.getEtudiant(id).subscribe((etudiant:Etudiant) => {
      this.etudiant._id= id;
      this.notes.etudiant_id=id;
      this.etudiant=etudiant;})

  }
  addNotes(form){
    if(form.valid){

  this.noteService.ajouterNote(this.notes).subscribe(()=>
  
  {this.router.navigate(['/etudiants/show',this.etudiant._id])})
  swal({
    type: 'success',
    title: 'Note Ajoutée',
    text: 'Ajoutée'
  })
  
  
    }else{
      
      swal({
        type: 'error',
        title: 'Désolé',
        text: 'Erreur'
      })

    }
      
  
  }
}
