import { Grundfahraufgabe } from './grundfahraufgabe.model';
import { Link } from './link.model';

export interface Fahraufgabe extends Grundfahraufgabe {
  links: Link[];
}
