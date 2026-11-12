import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { BasisdatenService } from './basisdaten.service';
import { ProtokollService } from './protokoll.service';

export const FormularStore = signalStore(
  { providedIn: 'root' },
  withProps(() => ({
    basisdatenForm: inject(BasisdatenService).getBasisdatenForm(),
    protokollForm: inject(ProtokollService).getProtokollForm(),
  })),
  withComputed(({ basisdatenForm, protokollForm }) => ({
    basisdatenValid: computed(() => basisdatenForm().valid()),
    basisdatenDirty: computed(() => basisdatenForm().dirty()),
    basisdatenValue: computed(() => basisdatenForm().value()),
    valid: computed(() => basisdatenForm().valid() && protokollForm().valid()),
    dirty: computed(() => basisdatenForm().dirty() || protokollForm().dirty()),
    value: computed(() => ({
      basisdaten: basisdatenForm().value(),
      protokoll: protokollForm().value(),
    })),
  })),
);
