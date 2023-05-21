import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { CrateAnteproyectoComponent } from './crate-anteproyecto/crate-anteproyecto.component';
import { HomeComponent } from './home.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderHomeComponent,
    ListaItemsComponent,
    CrateAnteproyectoComponent,
    HomeComponent,
    VerProyectoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
