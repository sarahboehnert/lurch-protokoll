import { Service, signal } from '@angular/core';
import {
  BewertungWithKommentar,
  KompetenzbereichBewertung,
  Protokoll,
} from '../../models/protokoll.model';
import { Bewertung } from '../../enum/bewertung.enum';
import { apply, applyEach, FieldTree, form, required, schema } from '@angular/forms/signals';

const kompetenzbereichBewertungSchema = schema<KompetenzbereichBewertung>((path) => {
  required(path.verkehrsbeobachtung.bewertung, { message: 'Bewertung ist erforderlich' });
  required(path.fahrzeugpositionierung.bewertung, { message: 'Bewertung ist erforderlich' });
  required(path.geschwindigkeitsanpassung.bewertung, { message: 'Bewertung ist erforderlich' });
  required(path.kommunikation.bewertung, { message: 'Bewertung ist erforderlich' });
  required(path.fahrzeugbedienung.bewertung, { message: 'Bewertung ist erforderlich' });
});

@Service()
export class ProtokollService {
  private readonly protokollFormModel = signal<Protokoll>(this.initProtokollModel());
  private readonly protokollForm: FieldTree<Protokoll> = form(this.protokollFormModel, (path) => {
    apply(path.fahraufgaben.einAusfaedelung, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.kurve, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.vorbeifahren, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.kreuzung, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.kreisverkehr, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.schienenverkehr, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.haltestelle, kompetenzbereichBewertungSchema);
    apply(path.fahraufgaben.geradeausfahren, kompetenzbereichBewertungSchema);

    apply(path.grundfahraufgaben.rechtsRueck, kompetenzbereichBewertungSchema);
    apply(path.grundfahraufgaben.parkenLaengs, kompetenzbereichBewertungSchema);
    apply(path.grundfahraufgaben.parkenQuer, kompetenzbereichBewertungSchema);
    apply(path.grundfahraufgaben.umkehren, kompetenzbereichBewertungSchema);
    apply(path.grundfahraufgaben.gefahrbremsung, kompetenzbereichBewertungSchema);

    applyEach(path.fahrtechnischeFragen, (item) => {
      apply(item.bewertung, kompetenzbereichBewertungSchema);
    });
  });

  public getProtokollForm(): FieldTree<Protokoll> {
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
    };
  }

  private getEmptyKompetenzbereichBewertung(): KompetenzbereichBewertung {
    return {
      verkehrsbeobachtung: this.getEmptyBewertungWithKommentar(),
      fahrzeugpositionierung: this.getEmptyBewertungWithKommentar(),
      geschwindigkeitsanpassung: this.getEmptyBewertungWithKommentar(),
      kommunikation: this.getEmptyBewertungWithKommentar(),
      fahrzeugbedienung: this.getEmptyBewertungWithKommentar(),
    };
  }

  private getEmptyBewertungWithKommentar(): BewertungWithKommentar {
    return {
      bewertung: Bewertung.KEINE_BEWERTUNG,
    };
  }
}
