import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { auswertungGuard, protokollGuard } from './formular-step.guard';
import { FormularStore } from '../services/formular/formular.store';

describe('FormularStepGuard', () => {
  const route = {} as ActivatedRouteSnapshot;
  const state = {} as RouterStateSnapshot;

  const basisdatenValid = signal(false);
  const protokollValid = signal(false);
  const formularStoreMock = { basisdatenValid, protokollValid };

  let router: Router;

  beforeEach(() => {
    basisdatenValid.set(false);
    protokollValid.set(false);

    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: FormularStore, useValue: formularStoreMock }],
    });

    router = TestBed.inject(Router);
  });

  it('should redirect to Basisdaten when Protokoll is opened while Basisdaten is invalid', () => {
    const result = TestBed.runInInjectionContext(() => protokollGuard(route, state));

    expect((result as UrlTree).toString()).toBe(router.parseUrl('/').toString());
  });

  it('should allow Protokoll once Basisdaten is valid', () => {
    basisdatenValid.set(true);

    const result = TestBed.runInInjectionContext(() => protokollGuard(route, state));

    expect(result).toBe(true);
  });

  it('should redirect to Basisdaten when Auswertung is opened while Protokoll is invalid', () => {
    const result = TestBed.runInInjectionContext(() => auswertungGuard(route, state));

    expect((result as UrlTree).toString()).toBe(router.parseUrl('/').toString());
  });

  it('should allow Auswertung once Protokoll is valid', () => {
    protokollValid.set(true);

    const result = TestBed.runInInjectionContext(() => auswertungGuard(route, state));

    expect(result).toBe(true);
  });
});
