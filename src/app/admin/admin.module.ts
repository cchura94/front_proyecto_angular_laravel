import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule
  ]
})
export class AdminModule { }
