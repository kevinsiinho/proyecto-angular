import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public url=environment.url;
  constructor(
    private http:HttpClient,
    private route: Router
  ) { }

login(id:number){
        localStorage.setItem("item",String(id))
   }

cerrar(id:number){


}

}
