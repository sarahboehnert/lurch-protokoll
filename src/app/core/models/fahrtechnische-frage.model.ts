import { Pruefpunkt } from "./pruefpunkt.model";

export interface FahrtechnischeFrage {
  titel: string;
  reihenfolge: number;
  pruefpunkt: Pruefpunkt[];
}
