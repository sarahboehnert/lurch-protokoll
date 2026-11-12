import { TestBed } from '@angular/core/testing';
import { FieldTree } from '@angular/forms/signals';

import { ProtokollService } from './protokoll.service';
import { Bewertung } from '../../enum/bewertung.enum';
import { KompetenzbereichBewertung } from '../../models/protokoll.model';

function setAlleBewertungen(
  kompetenzbereich: FieldTree<KompetenzbereichBewertung>,
  wert: Bewertung,
): void {
  kompetenzbereich.verkehrsbeobachtung.bewertung().value.set(wert);
  kompetenzbereich.fahrzeugpositionierung.bewertung().value.set(wert);
  kompetenzbereich.geschwindigkeitsanpassung.bewertung().value.set(wert);
  kompetenzbereich.kommunikation.bewertung().value.set(wert);
  kompetenzbereich.fahrzeugbedienung.bewertung().value.set(wert);
}

describe('ProtokollService', () => {
  let service: ProtokollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtokollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not report the form as valid before any Bewertung has been set', () => {
    expect(service.getProtokollForm()().valid()).toBe(false);
  });

  it('should report the form as valid once every Bewertung has been set', () => {
    const protokollForm = service.getProtokollForm();

    setAlleBewertungen(protokollForm.fahraufgaben.einAusfaedelung, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.kurve, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.vorbeifahren, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.kreuzung, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.kreisverkehr, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.schienenverkehr, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.haltestelle, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahraufgaben.geradeausfahren, Bewertung.GUT);

    setAlleBewertungen(protokollForm.grundfahraufgaben.rechtsRueck, Bewertung.GUT);
    setAlleBewertungen(protokollForm.grundfahraufgaben.parkenLaengs, Bewertung.GUT);
    setAlleBewertungen(protokollForm.grundfahraufgaben.parkenQuer, Bewertung.GUT);
    setAlleBewertungen(protokollForm.grundfahraufgaben.umkehren, Bewertung.GUT);
    setAlleBewertungen(protokollForm.grundfahraufgaben.gefahrbremsung, Bewertung.GUT);

    setAlleBewertungen(protokollForm.fahrtechnischeFragen[0].bewertung, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahrtechnischeFragen[1].bewertung, Bewertung.GUT);
    setAlleBewertungen(protokollForm.fahrtechnischeFragen[2].bewertung, Bewertung.GUT);

    expect(service.getProtokollForm()().valid()).toBe(true);
  });
});
