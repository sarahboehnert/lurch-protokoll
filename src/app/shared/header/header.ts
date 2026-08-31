import { Component, computed, inject, input, Signal, signal } from '@angular/core';
import { BewertungsschemaService } from '../../core/services/bewertungsschema.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly bewertungsschemaService = inject(BewertungsschemaService);

  protected readonly schuelerName = input<string>('');
  protected readonly datum = input<string>('');
  protected readonly fahrlehrerName = input<string>('');

  protected readonly bewertungsschemaVersion: Signal<string> = signal(
    this.bewertungsschemaService.getVersion(),
  );
  protected readonly inputData: Signal<boolean> = computed(
    () => this.schuelerName() !== '' && this.datum() !== '' && this.fahrlehrerName() !== '',
  );
}
