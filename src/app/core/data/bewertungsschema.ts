import { Bewertungsschema } from "../models/bewertungsschema.model";

export const bewertungsschema = {
    kompetenzbereiche: {
        verkehrsbeobachtung: {
            titel: 'Verkehrsbeobachtung',
            reihenfolge: 0
        },
        fahrzeugpositionierung: {
            titel: 'Fahrzeugpositionierung',
            reihenfolge: 1
        },
        geschwindigkeitsanpassung: {
            titel: 'Geschwindigkeitsanpassung',
            reihenfolge: 2
        },
        kommunikation: {
            titel: 'Kommunikation',
            reihenfolge: 3
        },
        fahrzeugbedienung: {
            titel: 'Fahrzeugbedienung / Umweltbewusste Fahrweise',
            reihenfolge: 4
        },
    },
    fahraufgaben: {
        einAusfaedelung: {
            titel: "Ein- und Ausfädelungsstreifen, Fahrstreifenwechsel",
            reihenfolge: 0,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Einfädelungsstreifen",
                    "url": "https://www.pfep.de/?&c=BE#/dt1/sdt1"
                },
                {
                    "titel": "Ausfädelungsstreifen",
                    "url": "https://www.pfep.de/?&c=BE#/dt1/sdt2"
                },
                {
                    "titel": "Fahrstreifenwechsel",
                    "url": "https://www.pfep.de/?&c=BE#/dt1/sdt3"
                }
            ]
        },
        kurve: {
            titel: "Kurve",
            reihenfolge: 1,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Kurve",
                    "url": "https://www.pfep.de/?&c=BE#/dt2/sdt0"
                }
            ]
        },
        vorbeifahren: {
            titel: "Vorbeifahren, Überholen",
            reihenfolge: 2,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Vorbeifahren an Hindernissen und Engstellen",
                    "url": "https://www.pfep.de/?&c=BE#/dt3/sdt1"
                },
                {
                    "titel": "Überholen anderer Verkehrsteilnehmer",
                    "url": "https://www.pfep.de/?&c=BE#/dt3/sdt2"
                }
            ]
        },
        kreuzung: {
            titel: "Kreuzung, Einmündung, Einfahren",
            reihenfolge: 3,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Überqueren von Kreuzungen und Einmündungen: Rechts vor Links",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt1/1"
                },
                {
                    "titel": "Überqueren von Kreuzungen und Einmündungen: Mit vorfahrtregelnden Verkehrszeichen",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt1/2"
                },
                {
                    "titel": "Überqueren von Kreuzungen und Einmündungen: Mit Lichtzeichenanlage",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt1/3"
                },
                {
                    "titel": "Überqueren von Kreuzungen und Einmündungen: Mit Regelung durch Polizeibeamte",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt1/4"
                },
                {
                    "titel": "Rechtsabbiegen an Kreuzungen und Einmündungen: Rechts vor Links",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt2/1"
                },
                {
                    "titel": "Rechtsabbiegen an Kreuzungen und Einmündungen: Mit vorfahrtregelnden Verkehrszeichen",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt2/2"
                },
                {
                    "titel": "Rechtsabbiegen an Kreuzungen und Einmündungen: Mit Lichtzeichenanlage",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt2/3"
                },
                {
                    "titel": "Rechtsabbiegen an Kreuzungen und Einmündungen: Mit Regelung durch Polizeibeamte",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt2/4"
                },
                {
                    "titel": "Linksabbiegen an Kreuzungen und Einmündungen: Rechts vor Links",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt3/1"
                },
                {
                    "titel": "Linksabbiegen an Kreuzungen und Einmündungen: Mit vorfahrtregelnden Verkehrszeichen",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt3/2"
                },
                {
                    "titel": "Linksabbiegen an Kreuzungen und Einmündungen: Mit Lichtzeichenanlage",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt3/3"
                },
                {
                    "titel": "Linksabbiegen an Kreuzungen und Einmündungen: Mit Regelung durch Polizeibeamte",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt3/4"
                },
                {
                    "titel": "Einfahren",
                    "url": "https://www.pfep.de/?&c=BE#/dt4/sdt4"
                }
            ]
        },
        kreisverkehr: {
            titel: "Kreisverkehr",
            reihenfolge: 4,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Kreisverkehr",
                    "url": "https://www.pfep.de/?&c=BE#/dt5/sdt0"
                }
            ]
        },
        schienenverkehr: {
            titel: "Schienenverkehr",
            reihenfolge: 5,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Heranfahren an und Überqueren von Bahnübergängen",
                    "url": "https://www.pfep.de/?&c=BE#/dt6/sdt1"
                },
                {
                    "titel": "Annäherung an Straßenbahnen und/oder Straßenbahnschienen",
                    "url": "https://www.pfep.de/?&c=BE#/dt6/sdt2"
                }
            ]
        },
        haltestelle: {
            titel: "Haltestelle, Fußgängerüberweg",
            reihenfolge: 6,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Annähern und Vorbeifahren an Haltestellen für Busse/Straßenbahnen",
                    "url": "https://www.pfep.de/?&c=BE#/dt7/sdt1"
                },
                {
                    "titel": "Annähern an und Überqueren von Fußgängerüberwegen",
                    "url": "https://www.pfep.de/?&c=BE#/dt7/sdt2"
                }
            ]
        },
        geradeausfahren: {
            titel: "Geradeausfahren",
            reihenfolge: 7,
            fehlerbewertung: [],
            links: [
                {
                    "titel": "Geradeausfahren",
                    "url": "https://www.pfep.de/?&c=BE#/dt8/sdt0"
                }
            ]
        }
    },
    grundfahraufgaben: {
        rechtsRueck: {
            titel: "Fahren nach rechts rückwärts unter Ausnutzung einer Einmündung, Kreuzung oder Einfahrt",
            reihenfolge: 0,
            fehlerbewertung: [
                "Ungenügende Beobachtung des Verkehrs",
                "Nicht in einem möglichst engen Bogen gefahren",
                "Nicht beachten des Rechtsfahrgebots",
                "Auffahren auf den Bordstein oder Überfahren der Fahrbahnbegrenzung",
                "Nicht annähernd parallel zum Bordstein oder zur Fahrbahnbegrenzung angehalten",
                "Endstellung nicht durch Rückwärtsfahrt erreicht",
                "Mehr als zwei Korrekturzüge"
            ],
        },
        parkenLaengs: {
            titel: "Einparken Längsaufstellung",
            reihenfolge: 1,
            fehlerbewertung: [
                "Ungenügende Beobachtung des Verkehrs",
                "Auffahren auf den Bordstein oder Überfahren der Fahrbahnbegrenzung",
                "Fehlerhafte Endstellung",
                "Abstand vom Bordstein oder von der Fahrbahnbegrenzung mehr als 30 cm",
                "Mehr als zwei Korrekturzüge"
            ],
        },
        parkenQuer: {
            titel: "Einparken Quer-/ Schrägaufstellung",
            reihenfolge: 2,
            fehlerbewertung: [
                "Ungenügende Beobachtung des Verkehrs",
                "Nicht ausreichender Seitenabstand",
                "Fahrzeugumriss ragt über markierte Parkfläche hinaus",
                "Mehr als zwei Korrekturzüge"
            ]
        },
        umkehren: {
            titel: "Umkehren",
            reihenfolge: 3,
            fehlerbewertung: [
                "Ungenügende Beobachtung des Verkehrs",
                "Unzulässiges Abweichen vom Rechtsfahrgebot"
            ]
        },
        gefahrbremsung: {
            titel: "Gefahrbremsung",
            reihenfolge: 4,
            fehlerbewertung: [
                "Zu geringe Ausgangsgeschwindigkeit",
                "Kein schlagartiges Betätigen der Betriebsbremse",
                "Nichterreichen der notwendigen Verzögerung",
                "Wesentliches Abweichen von der Fahrlinie durch fehlerhaftes Lenken",
                "Abwürgen des Motors"
            ]
        }
    },
    fahrtechnischeFragen: {
        zustand: {
            titel: "Überprüfung des ordnungsgemäßen Zustandes von:",
            reihenfolge: 0,
            pruefpunkte: {
                reifen: {
                    titel: "Reifen",
                    reihenfolge: 0
                }
            }
        },
        leuchten: {
            titel: "Scheinwerfer, Leuchten, Blinker, Hupe:",
            reihenfolge: 1,
            pruefpunkte: {
                einAusschalten: {
                    titel: "Scheinwerfer, Leuchten, Blinker, Hupe: Ein- und Ausschalten",
                    reihenfolge: 0
                },
                standlicht: {
                    titel: "Standlicht prüfen",
                    reihenfolge: 1
                },
                abblendlicht: {
                    titel: "Abblendlicht prüfen",
                    reihenfolge: 2
                },
                fernlicht: {
                    titel: "Fernlicht prüfen",
                    reihenfolge: 3
                },
                schlussleuchten: {
                    titel: "Schlussleuchte(n) mit Kennzeichenbeleuchtung prüfen",
                    reihenfolge: 4
                },
                nebelschlussleuchte: {
                    titel: "Nebelschlussleuchte prüfen",
                    reihenfolge: 5
                },
                warnblinkanlage: {
                    titel: "Warnblinkanlage prüfen",
                    reihenfolge: 6
                },
                blinker: {
                    titel: "Blinker prüfen",
                    reihenfolge: 7
                },
                hupe: {
                    titel: "Hupe prüfen",
                    reihenfolge: 8
                },
                bremsleuchten: {
                    titel: "Bremsleuchten prüfen",
                    reihenfolge: 9
                },
                kontrollleuchten: {
                    titel: "Kontrollleuchten benennen",
                    reihenfolge: 10
                }
            }
        },
        rueckstrahler: {
            titel: "Rückstrahler:",
            reihenfolge: 2,
            pruefpunkte: {
                vorhandensein: {
                    titel: "Rückstrahler auf Vorhandensein prüfen",
                    reihenfolge: 0
                },
                beschaedigung: {
                    titel: "Rückstrahler auf Beschädigung prüfen",
                    reihenfolge: 1
                }
            }
        },
        lenkung: {
            titel: "Lenkung:",
            reihenfolge: 3,
            pruefpunkte: {
                lenkschloss: {
                    titel: "Lenkschloss entriegeln",
                    reihenfolge: 0
                }
            }
        },
        bremsanlage: {
            titel: "Bremsanlage:",
            reihenfolge: 4,
            pruefpunkte: {
                betriebsbremse: {
                    titel: "Betriebsbremse auf Funktion prüfen",
                    reihenfolge: 0
                },
                feststellbremse: {
                    titel: "Feststellbremse auf Funktion prüfen",
                    reihenfolge: 1
                }
            }
        },
        fluessigkeitsstaende: {
            titel: "Flüssigkeitsstände:",
            reihenfolge: 5,
            pruefpunkte: {
                motoroel: {
                    titel: "Motoröl",
                    reihenfolge: 0
                },
                kuehlmittel: {
                    titel: "Kühlmittel",
                    reihenfolge: 1
                },
                scheibenwaschfluessigkeit: {
                    titel: "Scheibenwaschflüssigkeit",
                    reihenfolge: 2
                }
            }
        }
    }
} as const satisfies Bewertungsschema;