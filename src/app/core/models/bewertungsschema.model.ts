import { Fahraufgabe } from "./fahraufgabe.model";
import { FahrtechnischeFrage } from "./fahrtechnische-frage.model";
import { Grundfahraufgabe } from "./grundfahraufgabe.model";
import { Kompetenzbereich } from "./kompetenzbereich.model";

export interface Bewertungsschema {
    schemaVersion: string;
    kompetenzbereiche: Kompetenzbereich[];
    fahraufgaben: Fahraufgabe[];
    grundfahraufgaben: Grundfahraufgabe[];
    fahrtechnischeFragen: FahrtechnischeFrage[];
}