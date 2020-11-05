//Basic library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';
import { VerlistadoComponent } from './components/verlistado/verlistado.component';

//Service
import { ListadoserviceService } from './service/listadoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    VerlistadoComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProviders, ListadoserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
