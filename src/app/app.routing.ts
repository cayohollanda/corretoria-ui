import { PrincipalComponent } from './components/principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: 'principal', component: PrincipalComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
