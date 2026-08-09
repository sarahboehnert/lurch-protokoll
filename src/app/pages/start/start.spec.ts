import { TestBed } from '@angular/core/testing';
import { Start } from './start';

describe('Start', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Start],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Start);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the heading', async () => {
    const fixture = TestBed.createComponent(Start);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Start');
  });
});
