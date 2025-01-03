import { Routes } from '@angular/router';
// Layout
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'http-response/v1', pathMatch: 'full' },
  { 
    path: 'http-response/v1', 
    component: LayoutComponent, 
    loadChildren: () => import('./modules/modules.routes').then(m => m.ModulesRoutes) 
  }
];