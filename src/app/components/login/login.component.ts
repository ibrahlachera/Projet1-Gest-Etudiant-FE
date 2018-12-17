import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enseignant : Enseignant= {
    userName:"",
    password:""
  }
 
  constructor(private ensService: EnseignantService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }


  
  log() {
  
    this.ensService.getLogin(this.enseignant).subscribe((res: any) => {
      console.log(res)
     if(res.status) {
       this.ensService.setAuthStatusListener(true);
       localStorage.setItem('token', res.token);
       this.router.navigate(['/etudiants']);
  
      } 

   })
    

  }


}
