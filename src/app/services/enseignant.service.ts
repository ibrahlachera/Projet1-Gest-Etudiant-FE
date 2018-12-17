import { Injectable } from '@angular/core';
import { Enseignant } from '../models/enseignant';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  token: string = "";
  ens : Enseignant ={
    userName:"",
    password:""
  }
  
 
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  setAuthStatusListener(etat: boolean) {
    this.authStatusListener.next(etat);
  }
  

  getLogin(ens:Enseignant) {
    return this.http.post(`http://localhost:3000/api/enseignants/login`,{userName: ens.userName,password:ens.password});
  }


  getToken() {
    return !!localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

}
