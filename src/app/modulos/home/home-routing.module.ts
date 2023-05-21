import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrateAnteproyectoComponent } from './crate-anteproyecto/crate-anteproyecto.component';
import { HomeComponent } from './home.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'items',component:ListaItemsComponent},
    {path:'crearanteproyecto',component:CrateAnteproyectoComponent},
    {path:'anteproyecto/:id',component:VerProyectoComponent},
    {path:'', redirectTo:'items',pathMatch:'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
