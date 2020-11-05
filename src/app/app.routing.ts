//IMPORT NECESARIOS
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';

//Definir las rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listado', component: ListadoComponent },
  { path: '**', component: ErrorComponent },
];
//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
