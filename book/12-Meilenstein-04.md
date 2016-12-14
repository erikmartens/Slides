
= Meilenstein 04

# Meilenstein 04: Client

# Uebersicht

## Uebersicht

- Beginn heute

## Uebersicht

- Testat ist gemeinsam Meilenstein 3 und 4
- Antritt zum Testat **NUR** mit Pull-Request auf die Boilerplate
- Erfuellung Interface-Spezifikation (15 Punkte je Testat)
- Erfuellung Code-Qualitaet und Fachwissen (15 Punkte je Testat)


= Client

# Client

## Client

- Nutzung von nw.js
- Nutzung von ES6 / ES7


## Client Interface

- Neue View "Bot Mode"
- bestehende Aufgaben requested
- berechnet und zurueckgeschickt
- e.g. "Processing von MD5 Hashes"


## Client Interface

- Bundling der Applikation als nw.js Binary
- Funktion ist Interface + Bot
- Muss mit eigenem lokalen Server funktionieren
- Muss mit public Server (artificial.engineering) funktionieren


## Client Interface


## Bot Mode Tabelle

- Uebersichtstabelle ueber prozessierte Aufgabenstatus
- Spalten sind ID, Type, Input, Output, Sync
- Sync Spalte beinhaltet "OK" oder "Nicht OK", je nach Server Antwort


## Bot Mode View

- Tabelle (prozessierte Aufgaben)
- Pause/Resume Toggle Button der Bot Mode startet und beendet


## Bot Mode Funktionalitaet

- Support fuer `hash-md5` type
- Support fuer `hash-sha256` type
- Kein Support notwendig fuer `crack-md5` type


= API Spezifikation

# API Spezifikation

## API Spezifikation

## /api/Reports

API soll inkrementell Daten verwerten, also
nicht Daten unnoetig ueberschreiben lassen,
falls diese schon beantwortet sind.

## /api/Reports

- "Not OK" wenn Datensatz schon beantwortet wurde
- "OK" wenn Datensatz erfolgreich validiert und gespeichert wurde

## /api/Reports

- `POST` Request versendet Datenobjekt mit ID
- Verwendun nur fuer Bot Mode

```javascript
let data = {
	id: 123,
	data: {
		input:  'woot',
		output: '378b061da0cc7b0dd3fe8c75c2034d6a'
	}
};
```

