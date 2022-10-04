import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeticionInterceptor } from './interceptor/peticion.interceptor';

// theme
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      CountryService, CustomerService, EventService, IconService, NodeService,
      PhotoService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
