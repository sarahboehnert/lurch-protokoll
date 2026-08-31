import { inject } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

/**
 * Helpers zum Zugriff auf das Template über `data-test-id`-Attribute.
 *
 * Statt CSS-Klassen oder Elementstruktur abzufragen (was bei Refactorings
 * bricht), markieren wir Testanker im Template mit `data-test-id="..."` und
 * greifen in Tests ausschließlich darüber zu.
 */
export class TestQuery<T> {
  public constructor(private readonly fixture: ComponentFixture<T>) {}

  /** Erstes Element mit der `data-test-id` oder `null`. */
  query(testId: string): HTMLElement | null {
    return this.root.querySelector<HTMLElement>(this.getTestIdSelector(testId));
  }

  /** Alle Elemente mit der `data-test-id`. */
  queryAll(testId: string): HTMLElement[] {
    return Array.from(this.root.querySelectorAll<HTMLElement>(this.getTestIdSelector(testId)));
  }

  /** `textContent` des Elements oder `''`, wenn nicht vorhanden. */
  text(testId: string): string {
    return this.query(testId)?.textContent ?? '';
  }

  /** Texte aller passenden Elemente. */
  texts(testId: string): string[] {
    return this.queryAll(testId).map((el) => el.textContent ?? '');
  }

  private get root(): HTMLElement {
    return this.fixture.nativeElement as HTMLElement;
  }

  private getTestIdSelector(testId: string): string {
    return `[data-test-id="${testId}"]`;
  }
}
