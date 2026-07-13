/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    service = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });

  it('should restore selected theme from localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('light');
    service = TestBed.inject(ThemeService);

    expect(service.getCurrentTheme()).toBe('light');
  });

  it('should toggle theme', () => {
    service = TestBed.inject(ThemeService);
    const initialTheme = service.getCurrentTheme();
    service.toggleTheme();
    expect(service.getCurrentTheme()).not.toBe(initialTheme);
  });

  it('should set theme', () => {
    service = TestBed.inject(ThemeService);
    service.setTheme('light');
    expect(service.getCurrentTheme()).toBe('light');
    service.setTheme('dark');
    expect(service.getCurrentTheme()).toBe('dark');
  });
});
