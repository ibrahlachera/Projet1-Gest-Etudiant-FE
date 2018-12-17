import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note';
@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {
  
etudiant:Etudiant = {
  _id:"",
  cin: "",
  cne:"",
  fullname: "",
  email: "",
  filiere: "",
  anscol: "",
  notes:[{}]
}
notes : Note[] =[]
  constructor(private etudiantService:EtudiantService,private noteService:NoteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.etudiantService.getEtudiant(id).subscribe((etudiant:Etudiant) => {
      this.etudiant._id= id;
      this.etudiant=etudiant
      this.notes=etudiant.notes;
    console.log(this.notes)})
  this.etudiantService.getEtudiantNotes(id).subscribe((etudiant:Etudiant)=>{
    this.etudiant._id=id;
    this.notes=etudiant.notes;
    
  })


  }
  suppEtud(id) {
    

    swal({
      title: 'Vous êtes sûr ??',
      text: 'Cet étudiant va être supprimer définitivement',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {  
        this.etudiantService.deleteEtudiant(id).subscribe((res)=>
    {
      this.router.navigate(['/etudiants'])
    })
        swal({
      title: 'Supprimé',
      text: 'Etudiant supprimé avec succès',
      type: 'success',
      timer: 5000
    })

      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })

  }
  hack(val) {
    return Array.from(val);
  }
  
}
