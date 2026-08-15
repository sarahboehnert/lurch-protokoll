import { Service, signal } from '@angular/core';
import { Basisdaten } from '../../models/basisdaten.model';
import { form, required } from '@angular/forms/signals';

@Service()
export class BasisdatenService {
    private readonly basisdatenFormModel = signal<Basisdaten>({
        schueler: '',
        fahrlehrer: '',
        datum: new Date(),
    });
    private readonly basisdatenForm = form(this.basisdatenFormModel, (schemaPath) => {
        required(schemaPath.schueler, { message: 'Name des Schüler ist erforderlich' });
        required(schemaPath.fahrlehrer, { message: 'Name des Fahrlehrers ist erforderlich' });
        required(schemaPath.datum, { message: 'Datum ist erforderlich' });
    });

    public getBasisdatenForm() {
        return this.basisdatenForm;
    }
}
