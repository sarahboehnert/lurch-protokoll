import { TestBed } from '@angular/core/testing';
import { Auswertung } from './auswertung';

describe('Auswertung', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auswertung],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Auswertung);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the heading', async () => {
    const fixture = TestBed.createComponent(Auswertung);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Auswertung');
  });
});
