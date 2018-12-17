import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
etudiant:Etudiant={
  cin: "",
  cne:"",
  fullname: "",
  email: "",
  filiere: "",
  anscol: ""
}
form: FormGroup;
imagePreview = null;
  constructor(private etudiantService:EtudiantService,private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
  image: new FormControl(null, {validators: [Validators.required]}),
  cne: new FormControl(null, {validators: [Validators.required,
    Validators.minLength(5),
  Validators.maxLength(10)]}),
  cin: new FormControl(null, {validators: [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(15)]}),
  fullname: new FormControl(null, {validators: [Validators.required,
    Validators.minLength(10),
    Validators.maxLength(60)]}),
  anscol: new FormControl(null, {validators: [Validators.required]}),
  filiere: new FormControl(null, {validators: [Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30)]}),
  email: new FormControl(null, {validators: [Validators.required,Validators.email]})})
      

  }
  
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }


  submit() {
    if(this.form.valid) {
    this.etudiantService.addEtudiant(this.form.value).subscribe(()=>
    {this.router.navigate(['/etudiants']);
  })
  swal({
    type: 'success',
    title: 'Ajouté',
    text: 'Etudiant Ajouté'
  })
}else {
  swal({
    type: 'error',
    title: 'Désolé',
    text: 'Impossible d\'ajouter cet étudiant'
  })
}

}
}

