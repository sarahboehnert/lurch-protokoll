import { bewertungsschema } from '../data/bewertungsschema';
import { Bewertung } from '../enum/bewertung.enum';

type FahrtechnischeFragen = typeof bewertungsschema.fahrtechnischeFragen;
type FahrtechnischeFragenKategorieId = keyof FahrtechnischeFragen;
type FahrtechnischeFrageId = {
  [K in FahrtechnischeFragenKategorieId]: keyof FahrtechnischeFragen[K]['pruefpunkte'];
}[FahrtechnischeFragenKategorieId];

export interface BewertungWithKommentar {
  bewertung: Bewertung;
  kommentar?: string;
}

export interface KompetenzbereichBewertung {
  verkehrsbeobachtung: BewertungWithKommentar;
  fahrzeugpositionierung: BewertungWithKommentar;
  geschwindigkeitsanpassung: BewertungWithKommentar;
  kommunikation: BewertungWithKommentar;
  fahrzeugbedienung: BewertungWithKommentar;
}

interface FahrtechnischeFrage {
  id: FahrtechnischeFrageId | null;
  bewertung: KompetenzbereichBewertung;
}

export interface Protokoll {
  fahraufgaben: {
    einAusfaedelung: KompetenzbereichBewertung;
    kurve: KompetenzbereichBewertung;
    vorbeifahren: KompetenzbereichBewertung;
    kreuzung: KompetenzbereichBewertung;
    kreisverkehr: KompetenzbereichBewertung;
    schienenverkehr: KompetenzbereichBewertung;
    haltestelle: KompetenzbereichBewertung;
    geradeausfahren: KompetenzbereichBewertung;
  };
  grundfahraufgaben: {
    rechtsRueck: KompetenzbereichBewertung;
    parkenLaengs: KompetenzbereichBewertung;
    parkenQuer: KompetenzbereichBewertung;
    umkehren: KompetenzbereichBewertung;
    gefahrbremsung: KompetenzbereichBewertung;
  };
  fahrtechnischeFragen: [FahrtechnischeFrage, FahrtechnischeFrage, FahrtechnischeFrage];
  bemerkungenPruefer: string;
}
