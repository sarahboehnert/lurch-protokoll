import { Fahraufgabe } from './fahraufgabe.model';
import { FahrtechnischeFrage } from './fahrtechnische-frage.model';
import { Grundfahraufgabe } from './grundfahraufgabe.model';
import { Kompetenzbereich } from './kompetenzbereich.model';

export interface Bewertungsschema {
  version: string;
  kompetenzbereiche: Record<string, Kompetenzbereich>;
  fahraufgaben: Record<string, Fahraufgabe>;
  grundfahraufgaben: Record<string, Grundfahraufgabe>;
  fahrtechnischeFragen: Record<string, FahrtechnischeFrage>;
}
