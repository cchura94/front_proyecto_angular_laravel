import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeticionInterceptor } from '../interceptor/peticion.interceptor';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    CategoriaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PeticionInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
