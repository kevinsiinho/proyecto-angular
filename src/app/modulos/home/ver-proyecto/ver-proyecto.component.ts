import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/Modelos/proyecto/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.sass']
})
export class VerProyectoComponent implements OnInit {
  proyectoSubcription:Subscription=new Subscription
  public proyectos:Proyecto[]=[]
  public proyecto=new Proyecto();
  public idproyecto!:number
  public opcion!:string
  public comentario!:string
  public aceptar:boolean=false
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    public proyectoService: ProyectoService
  ){}

  public opciones=["Titulo","Descripcion","Hipotesis","Justificacion","Objetivo","Planteamiento"]
  ngOnInit(){
    this.idproyecto=Number(this.route.snapshot.paramMap.get('id'))
    this.proyectoSubcription=this.proyectoService.all$().subscribe((item:Proyecto[])=>{
      this.proyectos=item
      this.proyectos.forEach(element => {
        if(element.id===this.idproyecto){
           this.proyecto=element
        }

      });
    })

   this.proyectoService.all().subscribe();

  }

  aprobar(){
    this.aceptar=true
    this.enviar()
  }


  enviar(){
    if("Titulo"==this.opcion){
      this.proyecto.co_titulo.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadodescripcion="Pendiente"
        this.proyecto.estadotitulo="Aprobado"
      }
    }else if("Descripcion"==this.opcion){
      this.proyecto.co_descri.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadodescripcion="Aprobado"
        this.proyecto.estadohipotesis="Pendiente"
      }

    }else if("Hipotesis"==this.opcion){
      this.proyecto.co_hipotesis.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadodescripcion="Aprobado"
        this.proyecto.estadohipotesis="Pendiente"
      }
    }else if("Justificacion"==this.opcion){
      this.proyecto.co_justi.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadojustificacion="Pendiente"
        this.proyecto.estadohipotesis="Aprobado"
      }
    }else if("Objetivo"==this.opcion){
      this.proyecto.co_objetivo.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadobjetivo="Aprobado"
        this.proyecto.estadojustificacion="Pendiente"
      }
    }else if("Planteamiento"==this.opcion){
      this.proyecto.co_planteamiento.push(this.comentario)
      if(this.aceptar){
        this.proyecto.estadobjetivo="Aprobado"
        this.proyecto.estadoplateamiento="Pendiente"
      }
    }
    this.proyecto.estado="Corregido"
    console.log(this.proyecto)
   this.proyectoService.update(this.proyecto).subscribe()
  this.router.navigate(['/home/items']);
  }

}
