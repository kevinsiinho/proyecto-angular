import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { Proyecto } from 'src/app/Modelos/proyecto/proyecto';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 //solo comunica es decir actualiza los cambios si los hay
 public proyecto$ = new Subject<Proyecto>(); //para uno solo
 public proyectos$ = new Subject<Proyecto[]>; //para varios
 private token?:string;
 //estos si guardan
 public proyecto= new Proyecto();
 public proyectos: Proyecto[]=[];


  //como tratar la info o es decir para que lea lo que llega correctamente
  httpOptions={
    header:new HttpHeaders({'Content-Type':'application/json'})
  }

 public url=environment.url

 constructor(
   private http:HttpClient
 ) { }

 all$():Observable<Proyecto[]>{
  return this.proyectos$.asObservable();
}


//crud

create(proyecto:Proyecto){
  console.log(proyecto)
  return this.http.post<Proyecto>(this.url+"proyecto",proyecto)
 .pipe(
    map((res:any)=>{
        this.proyecto=new Proyecto()
        this.proyecto.setvalues(res.data)
        this.proyecto$.next(this.proyecto)

    }),
    catchError((err)=>of(err))
   )

}

all():Observable<any>{
  this.proyectos=[]
  return this.http.get<Proyecto>(this.url+"proyecto")
  .pipe(
    map((res:any)=>{
      res.forEach((item:any) => {
        this.proyecto=new Proyecto()
        this.proyecto.setvalues(item)
        this.proyectos.push(this.proyecto)
      });
      this.proyectos$.next(this.proyectos)
    }),
    catchError((err)=>of(err))
   )

}

update(proyecto:Proyecto):Observable<any>{
  return this.http.put<Proyecto>(this.url+"proyecto/"+proyecto.id,proyecto)
  .pipe(
    map((res:any)=>{
        this.proyecto=new Proyecto()
        this.proyecto.setvalues(res)

    }),
    catchError((err)=>of(err))
   )

}

}
