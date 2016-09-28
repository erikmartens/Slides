
= Web API

# Web API

## Web API

- Web API hat **NICHTS** mit DOM zu tun
- Web API ist Browser-API fuer Web Apps
- Mehr auf [https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)

## XHR

- XHR steht fuer XMLHttpRequest
- Alte schrottige Web-API
- Neue API ist `HTTP fetch`
- Fetch ist noch nicht Standard (thx to Microsoft)
- XHR2 nicht ganz so scheisse

## XHR

```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://server.tld/api/Status');

xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {

	var data = xhr.response;
	if (data !== null) {
		console.log(data); // Parsed JSON object
	}

};

xhr.send(null);
```

## Request Headers

- Custom Request Headers moeglich
- `setRequestHeader(header, value)` API
- `getRequestHeader(header)` API

## Request Headers

- Custom Token Header fuer den Request

```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://server.tld/api/Status');

xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Token', 'my-token-123');

xhr.onload = function() {

	var data = xhr.response;
	if (data !== null) {
		console.log(data); // Parsed JSON object
	}

};

xhr.send(null);
```

## Live Coding

- GET Request zu `botnet.artificial.engineering`
- Port ist `8080`, Pfad ist `/api/Status`
- Parse JSON Daten und logge Antwort in console
- Setze Encoding auf `UTF-8`



= DOM API

# DOM API

## DOM API

- DOM API ist Document Object Model
- Manipulation des DOM Inhalts
- HTML ist NICHT DOM
- DOM ist aktuelle Repraesentation von HTML

## querySelector / querySelectorAll

- Initieller Query fuer Elementmanipulation
- `querySelector` fuer einzelnes Element
- `querySelectorAll` fuer mehrere Elemente

```javascript
var element = document.querySelector('#status tbody');

console.log(element); // tbody Element API
```

## Element API

- DOM Elemente vererben von Web IDL Interfaces
- Jedes Element vererbt von HTMLElement
- Beispiel: HTMLDivElement
- Behinderte Schreibweise
- Namespaces aus XHTML moeglich, aber unbrauchbar
- `data-\*` Attribute fuer Datenverhalten

## Element API

- `innerHTML` Property (Crappy, aber einfach)
- `getAttribute(name)` API
- `document.createElement(tag)` API
- `document.createDocumentFragment()` API

## Live Coding

- Nutze `querySelector` auf die Tabelle
- Integriere GET Request in generiertes HTML
- JSON Daten als Inhalt der Tabelle



= Formulare

# Formulare

## Form Element

- `form` Tag
- Legacy Shit, nutzt sowieso keiner mehr
- Damals mit MIME attachment encoding
- Ja, genauso crappy wie E-Mails
- Nutzen wir nicht, da behindert

## Input Element

- `input` Tag
- `type` Attribut ( `text` , `range` , `number` , `date` )
- `value` Attribut

## Live Coding

- Button mit `start` und `stop`
- POST Request zu `botnet.artificial.engineering`
- Port ist `8080`, Pfad ist `/api/Status`
- Sende JSON Inhalt via `xhr.send(data)`
- Inhalt ist: id, action ( `stop` or `start` )
- Hint: Google JSON xhr send MDN



= HTTP Fetch

# HTTP Fetch

## Fetch API

- Gemacht fuer HTTP 2.0
- Gemacht fuer Promises
- Awesome API, but not so awesome Vendors
- Laeuft in Firefox, Chrome, Opera
- Nicht in Safari oder Edge (because Idiots)

## Fetch API

- Fetch API nutzt Promises
- Promises sind zukuenftige async/await API

## Beispiel

```javascript
var img = document.querySelector('#status img');

fetch('fancy.jpg').then(function(response) {
	return response.blob();
}).then(function(response) {

	var url = URL.createObjectURL(response);
	img.src = url;

});
```



= Promises

# Promises

## Promises

- Promises sind Verkettungen
- `then(callback)` Methode
- `catch(error_callback)` Methode
- Asynchroner Flow-basierter Code

## Promises

```javascript
var foo = new Promise(function(resolve, reject) {

	setTimeout(function() {
		resolve();
	}, 3000);

});

foo.then(function(val) {
	console.log(val);
});

foo.then(function(val) {
	div.innerHTML = 'WOOOT ' + val;
});
```

## Promises

- Promises sind Asynchrone Versprechen
- ES7 `async` und `await` basieren auf Promises

## Promises (async/await)

```javascript
var img  = document.querySelector('#status img');
(async() => {

	var blob = await fetch('fancy.jpg').then(response => response.blob);
	var url  = await URL.createObjectURL(response);
	img.src = url;
	
})();
```

## Live Coding

- Migriere den GET Request zu Fetch API
- Nutze ein richtiges Promise
- Teste in anderen Browsern
- Finde heraus, welcher Browser zu alt ist
- Google Promise Polyfill IE

