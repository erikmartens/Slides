
= ExpressJS

# express.js

## express.js

- Web App Framework
- Bibliothek zum Bauen von Web Apps
- Serverseitig (Node.js)


## express.js Hello World

```javascript
const express = require('express');
const app     = express();

app.get('/', (req, res) => {
	res.send('Hello world!');
});

app.listen(3000, () => {
	console.log('Example listening on http://localhost:3000');
});
```


## Live Coding

- Baue das Beispiel nach
- Oeffne den Web Browser auf `http://localhost:3000`
- Erklaere den GET Request
- Erklaere wie man einen POST Request macht



= REST Client

# REST Client

## REST Client

- Browser Extension: Advanced REST Client
- Erlaubt es, REST Requests zu erstellen
- Erlaubt es, schnell REST Server zu testen


## Live Coding

- Installiere "Advanced REST Client" fuer Chrome
- Oeffne die Chrome App
- Mache einen POST Request auf deinen Express Server



= Express Routen

# Express Routen

## Express Routen

- Express Routen nutzten regulaere Ausdruecke
- Alle Regulaeren Ausdruecke sind valide
- Escaping von Special Chars von RegExp notwendig (`$`)
- Parameter in URL via `:name` definierbar
- Query verfuegbar via `req.query` Objekt


## Express Routen

```javascript
app.get('/api/Tasks', (req, res) => {
	res.send('No Task id given');
});

app.get('/api/Tasks/:id', (req, res) => {
	res.send("Task id was " + req.params.id);
});
```


## Express Router

- Routen sind auslagerbar in mehrere Router
- Router sind mit Pfad-Praefixen versehen


## Express Router Beispiel

```javascript
const express = require('express');
const app     = express();
const router  = express.Router();

router.get('/Tasks/:id', (req, res) => {
	res.json({ message: 'Hooray, ' + req.params.id });
});

app.use('/api', router);
```


## Live Coding

- Baue einen Router
- Baue die Routen fuer die Botnet API
- Nutze das bestehende Interface fuer Testing


= Express REST

# Express REST

## Express REST

- Middlewares modifizieren optional HTTP Requests
- Middlewares manipulieren Datenstrom (Flow)


## Express REST

- `body-parser` ist Middleware fuer JSON und URL encoded data

```bash
npm install body-parser;
```


## Express REST

- `CRUD` Model (Create, Read, Update, Delete)
- `PUT` , `GET` , `POST` , `DELETE` Methoden
- Equivalente `app.put/get/post/delete()` etc. Methoden

```javascript
router.get('/Tasks/:id', (req, res) => {
	res.json({ message: 'READ Task ' + req.params.id });
});

router.post('/Tasks/:id', (req, res) => {
	console.log('Received data', req.body);
	res.json({ message: 'UPDATE Task ' + req.params.id });
});
```


## Beispiel

```javascript
const express = require('express');
const app     = express();
const parser  = require('body-parser');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// Other middlewares and routes

app.post('/Tasks/:id', (req, res) => {
	console.log('Received data', req.body);
	res.json({ message: 'UPDATE Task ' + req.params.id });
});

app.listen(3000);
```


## Express CORS

- `cors` Middleware fuer CORS Headers

```bash
npm install body-parser;
```


## Beispiel

```javascript
const express = require('express');
const app     = express();
const cors    = require('cors');

app.use(cors());

app.get('/test', (req, res) => {
	res.json({ message: 'This is CORS enabled.' });
});

app.listen(3000);
```

## Live Coding

- Baue die Botnet REST API
- Nutze das bestehende Interface fuer Testing

