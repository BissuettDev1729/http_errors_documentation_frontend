import { Component, effect, inject, OnInit } from '@angular/core';
import { HTTP_RESPONSE_CODES } from '../../shared/data/http-response-codes.data';
import { SignalsService } from '../../shared/services/signals.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-errors-code',
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './http-errors-code.component.html',
  styleUrl: './http-errors-code.component.scss'
})
export class HttpErrorsCodeComponent implements OnInit {

  private signals$ = inject(SignalsService)
  
  public statusCodesData: any[] = [];
  public statusCodesDataClone: any[] = [];
  public searchText: string = '';

  constructor() {
    effect(() => {
      // this.signals$.menuSelected$()
      // console.log('this.signals$.menuSelected$():', this.signals$.menuSelected$());
      this.getDataFromHttpResponses()
    });
  }

  private readonly menuMapping: Record<string, () => any[]> = {
    'all': () => [
      ...HTTP_RESPONSE_CODES['1xx'],
      ...HTTP_RESPONSE_CODES['2xx'],
      ...HTTP_RESPONSE_CODES['3xx'],
      ...HTTP_RESPONSE_CODES['4xx'],
      ...HTTP_RESPONSE_CODES['5xx']
    ],
    'informational': () => HTTP_RESPONSE_CODES['1xx'],
    'successful': () => HTTP_RESPONSE_CODES['2xx'],
    'redirection': () => HTTP_RESPONSE_CODES['3xx'],
    'error-client': () => HTTP_RESPONSE_CODES['4xx'],
    'error-server': () => HTTP_RESPONSE_CODES['5xx'],
  };

  public getDataFromHttpResponses(): void {
    this.statusCodesData = this.menuMapping[this.signals$.menuSelected$()]?.() || [];
    this.statusCodesDataClone = this.statusCodesData
  }

  public filteredData(search: string) {
    this.statusCodesDataClone = this.statusCodesData.filter(item => {
      return item.code.includes(search) || item.message.toLowerCase().includes(search.toLowerCase());
    });
    // Si no se encuentran elementos, restablecer el arreglo original
    if (this.statusCodesDataClone.length === 0 && search !== '') {
      this.statusCodesDataClone = this.statusCodesData;
    }
  }

  ngOnInit(): void {
    this.getDataFromHttpResponses()
  }

}
