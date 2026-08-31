import { Service } from '@angular/core';
import { bewertungsschema } from '../data/bewertungsschema';

@Service()
export class BewertungsschemaService {
  public getVersion(): string {
    return bewertungsschema.version;
  }
}
