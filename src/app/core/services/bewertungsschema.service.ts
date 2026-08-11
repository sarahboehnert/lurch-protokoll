import bewertungsschemaData from '../data/bewertungsschema.json';

import { Service } from '@angular/core';
import { Bewertungsschema } from '../models/bewertungsschema.model';
import { Kompetenzbereich } from '../models/kompetenzbereich.model';
import { Fahraufgabe } from '../models/fahraufgabe.model';
import { Grundfahraufgabe } from '../models/grundfahraufgabe.model';
import { FahrtechnischeFrage } from '../models/fahrtechnische-frage.model';

@Service()
export class BewertungsschemaService {
    private readonly bewertungsschema: Bewertungsschema = bewertungsschemaData;
    private readonly kompetenzbereiche: Kompetenzbereich[] = this.bewertungsschema.kompetenzbereiche;
    private readonly fahraufgaben: Fahraufgabe[] = this.bewertungsschema.fahraufgaben;
    private readonly grundfahraufgaben: Grundfahraufgabe[] = this.bewertungsschema.grundfahraufgaben;
    private readonly fahrtechnischeFragen: FahrtechnischeFrage[] = this.bewertungsschema.fahrtechnischeFragen;

    public getBewertungsschema(): Bewertungsschema {
        return this.bewertungsschema;
    }

    public getKompetenzbereiche(): Kompetenzbereich[] {
        return this.kompetenzbereiche;
    }

    public getFahraufgaben(): Fahraufgabe[] {
        return this.fahraufgaben;
    }

    public getGrundfahraufgaben(): Grundfahraufgabe[] {
        return this.grundfahraufgaben;
    }

    public getFahrtechnischeFragen(): FahrtechnischeFrage[] {
        return this.fahrtechnischeFragen;
    }
}
