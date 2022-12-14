import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from '../layout/app.layout.module';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {ToastModule} from 'primeng/toast';
import { ProductoComponent } from './components/producto/producto.component';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    // FormsModule,
    // AppLayoutModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    RadioButtonModule,
    InputNumberModule
  ]
})
export class AdminModule { }
