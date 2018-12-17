import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private ensService:EnseignantService,private router:Router) { }

  ensAutenticated: boolean = false;

  ngOnInit() {
   
    this.ensAutenticated = this.ensService.getToken();
    this.ensService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.ensAutenticated = isAuthenticated;
      });
  }


  logout() {
     this.ensService.removeToken();
     this.ensAutenticated = false;
     this.router.navigate(['/login']);
  }


}
