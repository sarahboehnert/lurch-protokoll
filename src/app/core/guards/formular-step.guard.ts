import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, Router } from '@angular/router';
import { FormularStore } from '../services/formular/formular.store';

function createFormularStepGuard(
  isUnlocked: (formularStore: InstanceType<typeof FormularStore>) => boolean,
): CanActivateFn {
  return (): GuardResult => {
    const formularStore: InstanceType<typeof FormularStore> = inject(FormularStore);
    const router: Router = inject(Router);

    return isUnlocked(formularStore) || router.parseUrl('/');
  };
}

export const protokollGuard: CanActivateFn = createFormularStepGuard((formularStore) =>
  formularStore.basisdatenValid(),
);

export const auswertungGuard: CanActivateFn = createFormularStepGuard((formularStore) =>
  formularStore.protokollValid(),
);
