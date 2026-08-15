import { TestBed } from '@angular/core/testing';

import { FormularStore } from './formular.store';

describe('FormularStore', () => {
  let store: InstanceType<typeof FormularStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({}); 
    store = TestBed.inject(FormularStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should combine the validity of both forms', () => {
    expect(store.valid()).toBe(store.basisdatenForm().valid() && store.protokollForm().valid());
  });

  it('should combine the value of both forms', () => {
    expect(store.value()).toEqual({
      basisdaten: store.basisdatenForm().value(),
      protokoll: store.protokollForm().value(),
    });
  });

  it('should expose the validity, dirty state and value of the Basisdaten form', () => {
    expect(store.basisdatenValid()).toBe(store.basisdatenForm().valid());
    expect(store.basisdatenDirty()).toBe(store.basisdatenForm().dirty());
    expect(store.basisdatenValue()).toEqual(store.basisdatenForm().value());
  });
});
