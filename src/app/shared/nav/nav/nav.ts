import { Component, inject, input, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { FormularStore } from '../../../core/services/formular/formular.store';

interface NavItem {
  label: string;
  path: string;
  exact: boolean;
  isLocked: () => boolean;
}

@Component({
  selector: 'app-nav',
  imports: [MatTabNav, MatTabLink, MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  private readonly formularStore = inject(FormularStore);

  public readonly tabPanel = input.required<MatTabNavPanel>();

  protected readonly basisdatenValid: Signal<boolean> = this.formularStore.basisdatenValid;
  protected readonly protokollValid: Signal<boolean> = this.formularStore.protokollValid;

  protected readonly navItems: NavItem[] = [
    { label: 'Basisdaten', path: '', exact: true, isLocked: () => false },
    {
      label: 'Protokoll',
      path: 'protokoll',
      exact: false,
      isLocked: () => !this.basisdatenValid(),
    },
    {
      label: 'Auswertung',
      path: 'auswertung',
      exact: false,
      isLocked: () => !this.protokollValid(),
    },
  ];
}
