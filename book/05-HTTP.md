
= HTTP

# HTTP

## HTTP

- Hyper Text Transfer Protocol
- Hypertext von Vannevar Bush: `Memex` 1945
- Erster Verbundener PC: Mother of all Demos 1968
- Erste HTML Seite bei CERN: `ENQUIRE` 1980
- Quasi-Erfinder: Douglas Engelbart, Tim Berners-Lee

## HTTP

- Basiert auf TCP
- Aktueller Standard [RFC7230](https://tools.ietf.org/html/rfc7230)
- Default `Port 80`
- Gaengiger Support: HTTP/1.1
- Neueste Version: HTTP/2.0 bzw. SPDY
- Zuerst Request, dann Response

## HTTP Request

- Plaintext Header
- Optional Encoding fuer Body
- Encoding-Anfrage (daher Body Plaintext)
- MIME Boundaries fuer versendete Dateien (wie E-Mails)
- MIME Boundaries sind scheisse

## Beispiel

```telnet
telnet google.de 80

GET /search?q=REST

(...)
```

## HTTP Response

- Plaintext Headers
- Encoding (gzip, deflate, zlib, sdch)
- Encoding (brotli und zopfli) nur in Blink
- Brotli und Zopfli wird quasi-Standard in HTTP2

## Beispiel

```telnet
telnet google.de 80

GET /search?q=REST
```

## Beispiel

```telnet
HTTP/1.0 302 Found
Location: http://www.google.de/search?q=REST&gws_rd=cr&ei=...
Cache-Control: private
Content-Type: text/html; charset=UTF-8
Server: gws
Content-Length: 273
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Set-Cookie: NIDE=123123123; expires=Wed, 26-Oct-2016 10:00:00 GMT; path=/; domain=.google.com; HttpOnly

<html><head>
(...)
</html>
```

## HTTP Methods

- Gaengige Verwendung: CRUD Model
- PUT (Create / Erstellen)
- GET (Read / Lesen)
- POST (Update / Veraendern)
- DELETE (Delete / Loeschen)

## HTTP Methods

- HEAD (wie GET aber nur mit Header Antwort)
- OPTIONS (CORS Security Model)
- TRACE (Reverse-Proxy Erkennung von Aenderungen)
- PATCH (Partielle Modifikation, Aehnlich wie PUT)

## HTTP Header

- Format ist `Header: Value`
- Format ist `Header: Value; Additional-Value`
- `\r\n` (carriage-return, newline) danach

## HTTP Sockets

- HTTP `Keep-Alive` header
- Wiederverwendbare Sockets
- Multiplexing von Requests und Responses
- Multipipelining von Sockets
- 6 - 12 Pipelines (Firefox, Opera, Chrome)
- No Pipelines in IE/Edge because WinHTTP

## HTTP Pipelines

![Pipelines](05-HTTP-pipeline.svg)



= CORS

# CORS

## CORS Model

- Cross-Origin Resource Sharing
- Aktuelle W3C Empfehlung [CORS](https://www.w3.org/TR/cors/)
- CDN (Content Delivery Network) XSS Problem
- XSS (Cross-Site Scripting)
- Standard fuer Einbettung fremder Inhalte
- OPTIONS Preflight Request

## CORS Model

```none
Client - GET /index.html  > Server
Client < transmit content - Server
Client - GET /index.js    > Server
Client < transmit content - Server

Client - OPTIONS cdn.tld/jquery.js > CDN
Client < Yes, allowed!             - CDN
Client - GET cdn.tld/jquery.js     > CDN
Client < transmit content          - CDN
```

## CORS Model - Schritt 1

- Client sendet `OPTIONS` Preflight Request
- `Origin` header ist URL in Adressleiste
- kann auch `app://` , `file://` , `whatever://` sein

## CORS Model - Schritt 2

- Server sendet Response
- `Access-Control-Allow-Origin` header mit Liste von URLs
- Client ueberprueft URL
- Fehlerfall: Error und Abbruch ( `onerror` bei XHR)

## CORS Model - Schritt 3

- Client sendet `GET` Request
- `Origin` header ist URL in Adressleiste

## CORS Model - Schritt 4

- Server vergleicht `Origin` URL
- Server sendet Antwort

## Potenzielle Probleme

- Client muss kein Browser sein
- Client kann zu alt sein
- Client kann `Origin` header faelschen

## CORS Request Headers

- `Origin` (Adresse der anfragenden Seite)
- `Access-Control-Request-Method` (HTTP Methode)
- `Access-Control-Request-Headers` (HTTP Headers)

## CORS Response Headers

- `Access-Control-Allow-Origin` (Adresse)
- `Access-Control-Allow-Credentials` (Login erlaubt?)
- `Access-Control-Max-Age` (Cache fuer Optionen)
- `Access-Control-Allow-Methods` (Liste an HTTP Methoden)
- `Access-Control-Allow-Headers` (Liste an HTTP Headers)

## CORS Response Headers

- `Access-Control-Expose-Headers`
- Whitelist fuer zugreifbare Header
- Blacklist fuer alle Header per default
- Beispiel: `Access-Control-Expose-Headers: content-length`

## CORS Response Headers

- `Cache-Control` (Cache-Anweisung / Behandlung)
- `Content-Language` (Sprache des Inhalts)
- `Content-Type` (Typ des Inhalts)
- `Expires` (Ablaufdatum fuer Cache)
- `Last-Modified` (Datum der letzten Modifikation)
- `Pragma` ( `no-cache` oder `token` )



= HTTPS

# HTTPS

## HTTPS

- Default `Port 443`
- Verschluesselung via Pub/Private Key
- CA (Certificate Authority) validiert Korrektheit
- SSL Zertifikate (theoretisch) sicher validierbar

## HTTPS

- Auth-Prozess ist komplex
- Manueller Cross-Signing Prozess von CAs notwendig
- Cross-Signing Prozess kostet viel Geld
- Potenzielle Security Leaks

## HTTPS Fails

- Leak Comodo Group
- Leak DigiNotar
- Leak Sony (inkl Root Cert, siehe PS3+ Cryto Breach)
- Leak Turkish Army
- Leak Microsoft (IWA eingeschlossen)
- SSL-Cert Problem Microsoft Oct 2015

## HTTPS Fails

- BULLRUN und PRISM (NSA)
- Nulling Bug (Moxie)
- OpenSSL 2011 (OCSP Stapling Bug)
- OpenSSL 2012 (ASN1 Bio Attack)
- OpenSSL 2014 (Heartbleed)
- OpenSSL 2014 (POODLE)
- LibreSSL 2014 (PRNG)
- BoringSSL/OpenSSL (CA Untrusted Bug)
- OpenSSL 2015 (Cycle Attack, ClientHello Bug)

## HTTPS Fazit

- IMMER TLS (SSL 3.0+)
- NICHT SSL (disable it)
- LibreSSL rocks, OpenSSL sucks

## HTTPS Signment Process

- User generiert Key fuer Domain blub.tld
- User schickt Cert zu CA
- CA signed und schickt zu anderer CA
- Andere CA cross-signed SSL Cert
- Andere CA zurueck zu CA zurueck zu User
- User hat nun valides SSL Cert
- Konfiguration von Webserver fuer SSL Cert
- Fazit: Encryption ist scheisse und braucht ewig

## HTTPS

- [letsencrypt.org](https://letsencrypt.org) Initiative
- begruendet nach Snowden Leaks
- begruendet durch EFF und Linux Foundation
- Ziel: Automatisierung von Encryption
- Fokus: Clearnet, Hyperboria, Darknet
- Sponsoren: Mozilla, Google, Facebook, Identrust, Akamei etc.

## Letsencrypt

```bash
letsencrypt-auto --apache;
letsencrypt-auto --nginx;
```

## Letsencrypt Plugins

- [Auto-SNI](https://github.com/DylanPiercey/auto-sni) on GitHub

```bash
npm install auto-sni;
```

```javascript
var sni    = require('auto-sni');
var server = sni({
	email:    "...",
	domains:  [ "mysite.com", ["bundle1.com", "www.bundle1.com"] ],
	agreeTos: true,
	forceSSL: true,
	ports: {
		http:  80,
		https: 443
	}
});

// ...
```



= WebSockets

# WebSockets

## WebSockets

- HTTP/1.1 `UPGRADE` header
- Handshake mit NONCE (fixierter Hash Salt)
- Most Awesome Protocol Ever (111!!!)
- Binaer oder Text Socket
- Custom WebSocket Extensions
- Custom WebSocket Sub Protocols

## WebSockets

- Peer-to-Peer via Extensions moeglich
- Erweiterbarer Header
- 3-Bit Service Flags
- TCP FIN Flag (und Fragmentierung)

## Beispiel

Beispiel WebSockets mit Network Tab



= HTTP2

# HTTP2

## HTTP2

- Entstanden aus SPDY
- Standardisiert seit Anfang 2015
- ist fuer TLS 1.2+ ausgelegt

## HTTP2

- Header UND Body compression
- Data Framing
- Erlaubt Multiplexing von Daten ueber gleichen Socket
- Mehrere parallele HTTP Pipelines

## HTTP2 PUSH und PULL

- Cache PUSH und PULL bei HTTPS only
- Push Verfahren erlaubt Cache Updates
- Cache Updates *BEVOR* der Client Daten anfragt
- Server versteht Dokument- und Asset-Abhaengigkeiten


= Live Demo

# Live Demo

## Live Demo

- Gehe auf einen wikipedia.org Artikel
- Neues Tab mit `chrome://net-internals`
- Oeffne `Sockets` Ansicht
- Lade neues Tab mit anderem wikipedia Artikel
- Erklaere das HTTP2 Verhalten

