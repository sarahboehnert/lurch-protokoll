import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MatTabNavPanel } from '@angular/material/tabs';

import { Nav } from './nav';
import { FormularStore } from '../../../core/services/formular/formular.store';
import { TestQuery } from '../../../testing/query.helper';

@Component({
  template: `<app-nav [tabPanel]="tabPanel" /><mat-tab-nav-panel #tabPanel />`,
  imports: [Nav, MatTabNavPanel],
})
class NavHost {}

describe('Nav', () => {
  let fixture: ComponentFixture<NavHost>;
  let testQuery: TestQuery<NavHost>;

  const basisdatenValid = signal(false);
  const protokollValid = signal(false);
  const formularStoreMock = { basisdatenValid, protokollValid };

  beforeEach(async () => {
    basisdatenValid.set(false);
    protokollValid.set(false);

    await TestBed.configureTestingModule({
      imports: [NavHost],
      providers: [provideRouter([]), { provide: FormularStore, useValue: formularStoreMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavHost);
    testQuery = new TestQuery(fixture);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a tab for each section', async () => {
    await fixture.whenStable();

    expect(testQuery.text('nav-link-basisdaten')).toContain('Basisdaten');
    expect(testQuery.text('nav-link-protokoll')).toContain('Protokoll');
    expect(testQuery.text('nav-link-auswertung')).toContain('Auswertung');
  });

  it('should disable Protokoll and Auswertung while Basisdaten is incomplete', async () => {
    await fixture.whenStable();

    expect(testQuery.query('nav-link-basisdaten')?.getAttribute('aria-disabled')).toBe('false');
    expect(testQuery.query('nav-link-protokoll')?.getAttribute('aria-disabled')).toBe('true');
    expect(testQuery.query('nav-link-auswertung')?.getAttribute('aria-disabled')).toBe('true');
  });

  it('should enable Protokoll but keep Auswertung disabled once Basisdaten is valid', async () => {
    basisdatenValid.set(true);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(testQuery.query('nav-link-protokoll')?.getAttribute('aria-disabled')).toBe('false');
    expect(testQuery.query('nav-link-auswertung')?.getAttribute('aria-disabled')).toBe('true');
  });

  it('should enable Auswertung once Protokoll is valid', async () => {
    basisdatenValid.set(true);
    protokollValid.set(true);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(testQuery.query('nav-link-auswertung')?.getAttribute('aria-disabled')).toBe('false');
  });
});
