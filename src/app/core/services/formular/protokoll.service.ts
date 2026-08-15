import { Service, signal } from '@angular/core';
import { BewertungWithKommentar, KompetenzbereichBewertung, Protokoll } from '../../models/protokoll.model';
import { Bewertung } from '../../enum/bewertung.enum';
import { form } from '@angular/forms/signals';

@Service()
export class ProtokollService {
    private readonly protokollFormModel = signal<Protokoll>(this.initProtokollModel());
    private readonly protokollForm = form(this.protokollFormModel);

    public getProtokollForm() {
        return this.protokollForm;
    }

    private initProtokollModel(): Protokoll {
        return {
            fahraufgaben: {
                einAusfaedelung: this.getEmptyKompetenzbereichBewertung(),
                kurve: this.getEmptyKompetenzbereichBewertung(),
                vorbeifahren: this.getEmptyKompetenzbereichBewertung(),
                kreuzung: this.getEmptyKompetenzbereichBewertung(),
                kreisverkehr: this.getEmptyKompetenzbereichBewertung(),
                schienenverkehr: this.getEmptyKompetenzbereichBewertung(),
                haltestelle: this.getEmptyKompetenzbereichBewertung(),
                geradeausfahren: this.getEmptyKompetenzbereichBewertung(),
            },
            grundfahraufgaben: {
                rechtsRueck: this.getEmptyKompetenzbereichBewertung(),
                parkenLaengs: this.getEmptyKompetenzbereichBewertung(),
                parkenQuer: this.getEmptyKompetenzbereichBewertung(),
                umkehren: this.getEmptyKompetenzbereichBewertung(),
                gefahrbremsung: this.getEmptyKompetenzbereichBewertung(),
            },
            fahrtechnischeFragen: [
                { id: null, bewertung: this.getEmptyKompetenzbereichBewertung() },
                { id: null, bewertung: this.getEmptyKompetenzbereichBewertung() },
                { id: null, bewertung: this.getEmptyKompetenzbereichBewertung() },
            ],
            bemerkungenPruefer: '',
        }
    }

    private getEmptyKompetenzbereichBewertung(): KompetenzbereichBewertung {
        return {
            verkehrsbeobachtung: this.getEmptyBewertungWithKommentar(),
            fahrzeugpositionierung: this.getEmptyBewertungWithKommentar(),
            geschwindigkeitsanpassung: this.getEmptyBewertungWithKommentar(),
            kommunikation: this.getEmptyBewertungWithKommentar(),
            fahrzeugbedienung: this.getEmptyBewertungWithKommentar(),
        }
    }

    private getEmptyBewertungWithKommentar(): BewertungWithKommentar {
        return {
            bewertung: Bewertung.KEINE_BEWERTUNG,
        }
    }
}
