import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/Modelos/proyecto/proyecto';
import { User } from 'src/app/Modelos/user/user';
import { ProyectoService } from 'src/app/servicios/proyecto/proyecto.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-crate-anteproyecto',
  templateUrl: './crate-anteproyecto.component.html',
  styleUrls: ['./crate-anteproyecto.component.sass']
})
export class CrateAnteproyectoComponent implements OnInit {

  proyectoSubcription:Subscription=new Subscription
  public proyecto=new Proyecto();
  public proyectos:Proyecto[]=[]
  public users:User[]=[]
  public iduser!:number
  public crear:boolean=false

  constructor(
    public userService: UserService,
    public proyectoService: ProyectoService,
    public router:Router
    )
   { }

   ngOnInit(): void {
    this.iduser=Number(localStorage.getItem("item"))
    this.proyectoSubcription=this.proyectoService.all$().subscribe((item:Proyecto[])=>{
      this.proyectos=item
      this.proyectos.forEach(element => {
        if(element.iduser===this.iduser){
            this.crear=true
            this.proyecto=element
        }

      });
    })

   this.proyectoService.all().subscribe();

   if(this.crear==false){
    this.cargar()
   }

 }


 onSave(){
  this.proyectoService.create(this.proyecto).subscribe();
  this.router.navigate(['/home/items']);
  }

  Onput(){
    this.proyecto.estado="Pendiente"
    this.proyectoService.update(this.proyecto).subscribe();
    this.router.navigate(['/home/items']);
    }

 cargar(){
  this.proyecto.estado="Pendiete"
  this.proyecto.iduser=this.iduser
  this.proyecto.estadodescripcion=""
  this.proyecto.estadohipotesis=""
  this.proyecto.estadojustificacion=""
  this.proyecto.estadobjetivo=""
  this.proyecto.estadoplateamiento=""
  this.proyecto.descripcion=""
  this.proyecto.estadotitulo="Pendiente"
  this.proyecto.co_descri=[]
  this.proyecto.co_hipotesis=[]
  this.proyecto.co_justi=[]
  this.proyecto.co_objetivo=[]
  this.proyecto.co_planteamiento=[]
  this.proyecto.co_titulo=[]
 }
}
