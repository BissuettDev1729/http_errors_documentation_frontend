import { Routes } from '@angular/router';
import { HttpErrorsCodeComponent } from './http-errors-code/http-errors-code.component';

export const ModulesRoutes: Routes = [
  { path: '', redirectTo: 'status/all', pathMatch: 'full' },
  { path: 'status/:code', component: HttpErrorsCodeComponent, pathMatch: 'full' },
];