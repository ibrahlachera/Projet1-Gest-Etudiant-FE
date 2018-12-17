import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
etudiants:Etudiant[]=[]
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
  constructor(private etudiantService:EtudiantService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   this.listEtudiant();
  }

  listEtudiant(){
    this.etudiantService.getEtudiants().subscribe((etudiants:Etudiant[])=>{
      this.etudiants=etudiants;
          })
  }
  

}
