import { Component, inject } from '@angular/core';
import { SignalsService } from '../../../shared/services/signals.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  
  public _signals = inject(SignalsService)

  public menus: {menu: string, label: string, url: string, ariaLabel: string}[] = [
    { menu: 'all', label: 'Todos los errores', url: 'status/all', ariaLabel: ''},
    { menu: 'informational', label: 'Respuestas informativas', url: 'status/informational-responses', ariaLabel: ''},
    { menu: 'successful', label: 'Respuestas exitosas', url: 'status/successful-responses', ariaLabel: ''},
    { menu: 'redirection', label: 'Mensajes de redireccionamiento', url: 'status/redirection-messages', ariaLabel: ''},
    { menu: 'error-client', label: 'Respuestas de error del cliente', url: 'status/client-error-responses', ariaLabel: ''},
    { menu: 'error-server', label: 'Respuestas de error del servidor', url: 'status/server-error-responses', ariaLabel: ''},
  ]

  constructor() {}

}
