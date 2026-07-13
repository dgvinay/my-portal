import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-mode';
  private themeSubject: BehaviorSubject<'light' | 'dark'>;
  private isBrowser: boolean;
  
  public theme$: Observable<'light' | 'dark'>;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    const initialTheme = this.getStoredTheme();
    this.themeSubject = new BehaviorSubject<'light' | 'dark'>(initialTheme);
    this.theme$ = this.themeSubject.asObservable();
    this.applyTheme(initialTheme);
  }

  private getStoredTheme(): 'light' | 'dark' {
    if (!this.isBrowser) {
      return 'dark';
    }
    
    const stored = localStorage.getItem(this.THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    // Default to dark theme
    return 'dark';
  }

  toggleTheme(): void {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.themeSubject.next(theme);
    if (this.isBrowser) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
    this.applyTheme(theme);
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.themeSubject.value;
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (!this.isBrowser) {
      return;
    }
    
    const htmlElement = document.documentElement;
    if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'light');
      document.body.style.backgroundColor = '#f5f5f5';
      document.body.style.color = '#333333';
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    }
  }
}
