
= HTML5

# HTML5



= Spezifikation

# Spezifikation

## Sprache

- Hyper Text Markup Language
- Dialekt von SGML
- Auszeichnungssprache
- **keine** Programmiersprache
- Dokumentstruktur, nicht Dokumentverhalten
- statische Inhalte
- verlinkte Inhalte

## W3C

- World Wide Web Consortium
- Oeffentliches Gremium
- Standardisierung von Webtechnologien
- So genannte Working Groups
- Bsp: CSS, WebApp, Mobile, Media Extension



= Legacy

# Legacy

## Oldskool XHTML

- XHTML 1.1 (2001) definiert XML Schemata
- Schemata bergen Probleme bei Invaliditaet
- Kein definiertes Verhalten bei Fehlern
- XHTML 2.0 nie fertig gestellt
- XForms 2.0 nie fertig gestellt

## Warum XHTML / XML?

- Pro: Validierung von Inhalten
- Pro: Extraktion von Inhalten
- Kontra: Keine Abbildung von Fehlverhalten
- Kontra: XHTML eiten mit Fehlern nicht besuchbar
- Kontra: Keine Upgrades oder Deprecations
- Kontra: Jeder Mensch baut inperfektes XHTML
- Kontra: XML hat zu viel Overhead an unnuetzen Schematadaten

## HTML5

- Aktueller Standard: HTML5 (2014)
- **Living Standard** HTML5 (2014)
- **Living Standard** JS/ES (ES2015 / ES2016 / ES2017)
- Fokus ist Mobile, Media, Web Apps
- Zusammenarbeit mit WHATWG
- Feature Detection, nicht Browser Detection
- Feature Detection, nicht Schema Detection



= Struktur

# Struktur

## Struktur

```html
<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html">
	<title>HTML5 Boilerplate</title>
</head>
<body>
	<header>
		<h1>Meine erste Website</h1>
	</header>
	<main>
		<article>
			<p>Mein erster Satz</p>
		</article>
	</main>
</body>
</html>
```

## Struktur (quirks / fuzzy HTML5)

```html
<!DOCTYPE html>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html">
<title>HTML5 Boilerplate</title>
<header>
	<h1>Meine erste Website</h1>
</header>
<main>
	<article>
		<p>Mein erster Satz</p>
	</article>
</main>
```

## Encoding

- legt Bytefolge der Zeichen fest
- ist im Header einer Datei
- ISO-8859-1 (Latin-1) entspricht C4
- Unicode (UCS2) entspricht 00 C4
- UTF-8 entspricht C3 84

## Encoding (UTF-16)

- **Always use UTF-8, otherwise you're an idiot.**
- Fast ALLE Unicode Implementierungen sind fehlerhaft
- Never use Unicode, because:

## Encoding (Unicode)

```
effective. Powerلُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ冗
```

## Formatierung

- Formatierung von SGML/HTML ist irrelevant
- Leerzeichen, Tabs, Zeilenvorschub sind Trenner
- Einrueckung dient Lesbarkeit, wird ignoriert
- Absaetze und Layout durch Tags
- Sonderzeichen durch HTML Entitaeten
- Kommentare analog zu XML

## Entitaeten

- `<` als `&amp;lt;`
- `>` als `&amp;gt;`
- `&` als `&amp;amp;`
- `"` als `&amp;quot;`

## Tags

- Tags sind Layout Elemente
- Name in spitzen Klammern ( `<h2>` )
- Jedes Tag muss geschlossen werden ( `</h2>` )
- Tags koennen verschachtelt werden
- Verschachtelung abhaengig vom Display Model

## Leere Tags

- Es gibt leere Tags ( `<br>` oder `<hr>` )
- Leere Tags schliessen sich selbst

## Leere Tags

```html
<meta charset="UTF-8">

<br> oder <br/>
<hr> oder <hr/>
```


## Tags (Semantik)

- Header ( `<header>` )
- Hauptteil ( `<main>` )
- Sidebars ( `<aside>` )
- Menus ( `<menu>` )
- Sektionen ( `<section>` )
- Artikel ( `<article>` )
- Footer ( `<footer>` )


## Beispiel

```html
<h1>Headline</h1>
<div><h2>Fancy Title</h2></div>

<header>
	<menu>
		<li>Item 1</li>
		<li>Item 2</li>
	</menu>
</header>
```

## Tags (Inhalt)

- Ueberschriften ( `h1` bis `h6` )
- Textabsaetze ( `p` )
- Blocktrenner ( `div` )
- Inline-Text ( `span` )


## Live Coding

- Erstelle `CNC/Interface/index.html`
- Baue ein Menu mit Navigationspunkten
- Optional: Verlinke die Menupunkte mit Hashbangs
- Optional: Konfiguriere einen lokalen Webserver


= Attribute

# Attribute

## Attribute

- Oeffnende Tags haben optionale Attribute
- Werte der Attribute in Anfuehrungszeichen
- Globale Attribute bei jedem Tag moeglich
- `data-*` Attribute bei jedem Tag moeglich

## Attribute

```html
<h2 id="test">Headline</h2>
<h3 class="test">Headline</h3>

<div style="background:red">Content</div>
<div title="Awesome">Another Content</div>
```

## Globale Attribute

- `id` : eindeutige ID (ein Element)
- `class` : CSS-Klasse im Stylesheet (mehrere Elemente)
- `style` : Eingebettetes Stylesheet
- `title` : Erlaeuterung zum Element
- `data-` : Spezielle Daten fuer das Element

## Globale Attribute

- `contenteditable` : Editierbarkeit des Inhalts
- `draggable` und `dropzone` : Drag und Drop
- `contextmenu` : Kontext Menu (Rechtsklick)
- `accesskey` : Shortcut Taste fuer Selektion
- `tabindex` : Tab-Reihenfolge
- `tanslate` : `yes/no` fuer Uebersetzung

## Live Coding

- Mache den Inhalt `[Tab]` -bar
- Fuege Shortcuts hinzu
- Mache den Inhalt editierbar
- Optional: Erstelle ein Kontext Menu



= Listen und Tabellen

# Listen und Tabellen

## Tags (Listen)

- Sortierte Liste ( `ol` )
- Unsortierte Liste ( `ul` )
- Listenelemente ( `li` )

## Tags (Listen)

```html
<h3>Awesome List</h3>

<article>
	<ol>
		<li><strong>2l</strong> Milk</li>
		<li><strong>3l</strong> Water</li>
		<li><strong>6x</strong> Eggs</li>
		<li><strong>100kg</strong> Bacon</li>
	</ol>
</article>
```

## Tabellen (Semantik)

- Repraesentation fuer Daten
- nur fuer Dateninhalte
- **nicht** fuer Layout

## Tags (Tabellen)

- Tabelle ( `table` )
- Header ( `thead` )
- Inhalt ( `tbody` )
- Zeile ( `tr` )
- Datenzelle ( `td` )

## Tags (Tabellen)

```html
<table>
	<thead>
		<tr>
			<th>Amount</th>
			<th>Item</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>2l</td>
			<td>Milk</td>
		</tr>
		<tr>
			<td>3l</td>
			<td>Water</td>
		</tr>
	</tbody>
</table>
```

## Tabellen (Struktur)

- Zeile verbinden ( `tr rowspan="2"` )
- Spalte verbinden ( `td colspan="2"` )

## Live Coding

- Erstelle Liste fuer das Menu
- Erstelle Tabelle mit dem Inhalt:
- "Gruppe", "Vorname", "Name", "Studiengang", "Matrikelnummer"
- Optional: Mache die Tabelle sortierbar



= Meta-Daten

# Meta-Daten

## Meta-Daten

- Gehoeren in den Header der Datei ( `<head>` )
- Anweisungen fuer den Browser
- Anweisungen fuer Spiders oder Scraper
- Anweisungen fuer Crawler und Bots

## Meta-Daten

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Christoph Martens">
    <meta name="robots" content="noindex, follow">
    <meta name="viewport" content="width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
</head>
```

## Meta-Daten (Open Graph)

- Meta-Tags auch fuer Social Web
- Open Graph API (Facebook, Twitter)

```html
<head>
    <meta name="og:image" content="/design/preview.png">
    <meta name="og:image:width" content="256">
    <meta name="og:image:height" content="256">
    <meta name="og:description" content="Awesome website with some content">
</head>
```

## Links

- Links fuer Dokumente
- Aus Zeiten der digitalen Buecher
- Anweisungen fuer den Browser
- `rel` Attribut ( `next` , `prev` , `stylesheet` )

## Links

```html
<head>
    <link rel="stylesheet" href="./design/index.css"/>
    <link rel="stylesheet" media="print" href="./design/print.css"/>

    <link rel="prev" href="page-01.html">
    <link rel="next" href="page-03.html">
</head>
```

## Live Coding

- Stylesheet `./design/index.css` hinzufuegen
- Print Stylesheet `./design/print.css` hinzufuegen
- Beschreibung und Autor der Website hinzufuegen
- Encoding auf `UTF-8` setzen
- Optional: Setze korrekten `viewport` (mobile-ready)



= Inhalte

# Inhalte

## Bilder

- `<img>` Tag
- `src` Attribut mit `URL` Wert.
- `alt` Alternativer Text (nicht ladbares Bild)
- `width`, `height` jeweils mit Pixelwert

```html
<img src="awesome-01.jpg" alt="Awesome Stuff"/>
<img src="awesome-02.png" width="100" height="200"/>
```

## Hyperlinks

- Verknuepfung von Dokumenten und/oder Elementen
- Verweis via URL und Identifier (#blub)
- Absolute URL ( `/blub.html` )
- Relative URL ( `../blub.html` )
- Download einer Datei (Anhang oder Text)
- `protocol://server:port/path/file.ext#element`

## Hyperlinks

```html
<a href="https://github.com">Click here to visit GitHub</a>
<a href="https://google.com">Click here to visit Google</a>
<a href="./index.html#seite2">Go to page 2</a>
<a href="//google.com">Visit google (use current protocol)</a>
```

## Protokolle

```html
<a href="mailto:support@github.com">E-Mail to GitHub</a>
<a href="ftp://ftp.hs-mannheim.de/setup.zip">Download via FTP</a>
<a href="./setup.zip">Download via HTTP or HTTPS</a>
<a href="file:///home/cookiengineer/index.html">Local File</a>
```

## Elemente

```html
<a href="#paragraph1">First paragraph</a>
<a href="#paragraph2">Second paragraph</a>

<p id="paragraph1">A long, long time ago ...</p>
<p id="paragraph2">there was a little script kiddo.</p>
```

## Hyperlink Beziehungen

- Unterschiedliche Typen von Links
- Angabe via `rel` Attribut
- `author` , `help` , `license` , `next` , `prev`
- `prefetch` , `nofollow` , `noreferrer`

## Hyperlink Beziehungen

```html
<a rel="download" href="setup.zip">Download</a>
<a rel="nofollow" href="./login.html">Login</a>
<a rel="license" href="/LICENSE.txt">License</a>
<a rel="noreferrer" href="https://google.com">Google (external Site)</a>
```

## Live Coding

- Erstelle `menu`, `header`, `main` und zwei `section`
- Erstelle `section` mit id `status`
- Erstelle `section` mit id `tasks`
- Erstelle `table` mit id `status-overview`
- Verlinke das Menu mit den IDs der Sektionen

