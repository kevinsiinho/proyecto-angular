import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/Modelos/proyecto/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.sass']
})
export class ListaItemsComponent implements OnInit{

  proyectoSubcription:Subscription=new Subscription
  public proyecto=new Proyecto();
  public proyectos: Proyecto[]=[]
  public  id!:number
  constructor(
   public proyectoService: ProyectoService
  ) { }
    
  ngOnInit(): void {
    this.proyectoSubcription=this.proyectoService.all$().subscribe((item:Proyecto[])=>{
        this.proyectos=item;
        console.log(this.proyectos)
      }
      
    )
    this.proyectoService.all().subscribe();
  }
  
}
