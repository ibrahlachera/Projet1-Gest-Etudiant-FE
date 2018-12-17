import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  etudiant:Etudiant={
    cin: "",
    cne:"",
    fullname: "",
    email: "",
    filiere: "",
    anscol: ""
  }
  imagePreview = null;
  form: FormGroup;
  constructor(private etudiantService:EtudiantService,private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      cne: new FormControl(null, {validators: [Validators.required,
        Validators.minLength(5),
      Validators.maxLength(10)]}),
      cin: new FormControl(null, {validators: [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)]}),
      fullname: new FormControl(null, {validators: [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(60)]}),
      email: new FormControl(null, {validators: [Validators.required,Validators.email]})})
      let id = this.route.snapshot.params.id;
      this.etudiantService.getEtudiant(id).subscribe((etudiant:Etudiant) => {
      
        this.etudiant=etudiant;})
  }
  submit() {
    if(this.form.valid) {
    this.etudiantService.editEtudiant(this.etudiant).subscribe(()=>
    {this.router.navigate(['/etudiants']);
  })
  swal({
    type: 'success',
    title: 'Modifié',
    text: 'Etudiant Modifié'
  })
}else {
  swal({
    type: 'error',
    title: 'Désolé',
    text: 'Impossible de modifier cet étudiant'
  })
}

}

}
