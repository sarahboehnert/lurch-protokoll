import { TestBed } from '@angular/core/testing';
import { Protokoll } from './protokoll';

describe('Protokoll', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protokoll],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Protokoll);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the heading', async () => {
    const fixture = TestBed.createComponent(Protokoll);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Protokoll');
  });
});
