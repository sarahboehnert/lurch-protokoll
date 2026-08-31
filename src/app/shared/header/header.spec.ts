import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { BewertungsschemaService } from '../../core/services/bewertungsschema.service';
import { TestQuery } from '../../testing/query.helper';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let testQuery: TestQuery<Header>;

  const bewertungsschemaServiceMock = {
    getVersion: () => version,
  };

  const version = '0.1';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [{ provide: BewertungsschemaService, useValue: bewertungsschemaServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    testQuery = new TestQuery(fixture);
  });

  it('should create', async () => {
    // expect
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the schema version from the BewertungsschemaService', () => {
    // expect
    expect(testQuery.text('bewertungsschema-version')).toContain(`Schema v${version}`);
  });

  it('should not render the protokoll info block while inputs are incomplete', async () => {
    // prepare
    fixture.componentRef.setInput('schuelerName', 'Max Mustermann');
    fixture.componentRef.setInput('datum', '2026-08-31');

    // action
    await fixture.whenStable();

    // expect
    expect(testQuery.text('info')).not.toContain('Max Mustermann');
    expect(testQuery.text('info')).not.toContain('2026-08-31');
  });

  it('should render the protokoll info block if all inputs are set', async () => {
    // prepare
    fixture.componentRef.setInput('schuelerName', 'Max Mustermann');
    fixture.componentRef.setInput('datum', '2026-08-31');
    fixture.componentRef.setInput('fahrlehrerName', 'Erika Musterfrau');

    // action
    await fixture.whenStable();

    // expect
    expect(testQuery.text('info')).toContain('Max Mustermann');
    expect(testQuery.text('info')).toContain('2026-08-31');
    expect(testQuery.text('info')).toContain('Erika Musterfrau');
  });
});
