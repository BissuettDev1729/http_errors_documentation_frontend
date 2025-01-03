import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public themeDark$ = signal<boolean>(false)
  public openSidebar$ = signal<boolean>(true)
  public loadingPage$ = signal<boolean>(true)
  public menuSelected$ = signal<string>('all')

  constructor() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery.bind(this));
    this.menuSelected$.set(localStorage.getItem('menuActive') || 'all')
  }

  public setThemeDark(state: boolean) {
    this.themeDark$.set(state)
    localStorage.setItem('isThemeDark', state ? 'yes' : 'no')
    if(state) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      window.matchMedia('(prefers-color-scheme: dark)')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      window.matchMedia('(prefers-color-scheme: light)')
    }
  }

  private checkMediaQuery() {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    this.setSidebar(mediaQuery.matches);
  }

  public setLoadingPage(state: boolean) {
    this.loadingPage$.set(state)
  }

  public setSidebar(state: boolean) {
    this.openSidebar$.set(state)
  }

  public setMenuSelected(menu: string) {
    localStorage.setItem('menuActive', menu)
    this.menuSelected$.set(menu)
  }
}
