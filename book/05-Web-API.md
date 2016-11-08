
= Web API

# Web API

## Web API

- Web API hat **NICHTS** mit DOM zu tun
- Web API ist Browser-API fuer Web Apps
- Mehr auf [https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)

## XHR

- XHR steht fuer XMLHttpRequest
- Alte schrottige Web-API (1996+)
- Neue API ist `HTTP fetch`
- Fetch ist noch nicht Standard (thx to Microsoft)

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
- Port ist `80`, Pfad ist `/api/Status`
- Pfad ist `http://botnet.artificial.engineering:80/api/Status`
- Parse JSON Daten und logge Antwort in console
- Setze Encoding auf `UTF-8`



= HTTP Fetch

# HTTP Fetch

## Fetch API

- Gemacht fuer HTTP 2.0
- Gemacht fuer Promises

## Fetch API

- Fetch API nutzt Promises
- Promises sind zukuenftige async/await API

## Fetch API

```javascript
var img = document.querySelector('#status img');

fetch('fancy.jpg').then(function(response) {
	return response.blob();
}).then(function(response) {

	var url = URL.createObjectURL(response);
	img.src = url;

});
```

## Fetch API

```javascript
fetch('/api/Status').then((response) => {
	return response.json();
}).then((json) {
	console.log(json);
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
var img = document.querySelector('#status img');
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

