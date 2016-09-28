
= NodeJS

# node.js

## node.js

- basiert auf v8 (Engine in Chrome)
- Quasi-Runtime um Server zu bauen
- liefert Bindings fuer HTTP, NET usw.


## node.js

- Cross-Architecture (arm, amd64, mips)
- Cross-Platform (Linux, BSD, Windows, OSX, Android)
- Node Modules (`node_modules` Ordner)
- Seit v7.0.0+ ES7 Support


## NPM

- node.js bundlet NPM
- NPM ist node package manager
- Achtung bei rekursiven Abhaengigkeiten


## Semantic Versioning

- Semantische Versionierung (z.B. `v1.2.3`)
- MAJOR . MINOR . PATCH version
- Major version heisst incompatible API changes
- Minor version heisst backwards-compatible changes
- Patch version heisst backwards-compatible bug fixes


## Abhaengigkeiten

- Aufloesung via `package.json`
- `npm init` Wizard fuer Erstellung eines NPM Pakets
- `dependencies` Sektion fuer Abhaengigkeiten
- Spezifische Abhaengigkeiten via `~1.1.2`
- Updatebare Abhaengigkeiten via `^1.0.0`


## Beispiel

```json
{
	"dependencies": {
		"express": "*",
		"body-parser": "*"
	}
}
```


## Node Modules

- Aufloesung via `package.json`
- `main` Eintrag, welcher den Pfad angibt
- `bin` Eintrag, falls als CLI tool nutzbar


## Beispiel

```json
{
	"main": "./source/index.js"
}
```


## NPM install

- `npm install module` fuer Lokale Installation
- `npm install -g module` fuer Globale Installation
- Lokale Module in `./node_modules` Ordner
- Globale Module in `/usr/lib/node_modules` Ordner


## NPM local install

Lokale Installation eines NPM Moduls via

```bash
npm install express;

# Should exist here
# cd ./node_modules/express;
```


## NPM global install

Globale Installation eines NPM Moduls via

```bash
sudo npm install -g babel;

# Should exist there
# cd /usr/lib/node_modules/babel;
```


## Node Modules

- ES6 `import { module } from './path'`
- ES6 Modules noch nicht fertig
- Deshalb Einbindung via `require(module_name)`


## Import Syntax (ES6)

```javascript
import { express } from './path/to/express';

express.whatever();
```


## Import Syntax (ES5)

```javascript
const express = require('express');

// express befindet sich in ...
// entweder ./node_modules/express
// oder /usr/lib/node_modules/express
```


## Live Coding

- Download node.js von [nodejs.org](https://nodejs.org)
- Installiere `node.js`
- Google nach Modul `express`
- Installiere `express`
- Folge dem expressjs.com Tutorial



= FS API

# FS API

## FS readFile

- fs.readFile(file, options, callback)
- `file` ist ein `String` (Pfad zur Datei)
- `options` ist ein Objekt aus `encoding` und `flag` property
- `encoding` ist ein `String` und defaulted zu `binary`
- Moegliche `encodings` sind z.B. `utf8` , `base64` , `hex` , `ascii`
- `flag` ist ein `String` und defaulted zu `r`
- `callback` ist eine `Function`


## FS readFile

- fs.readFile(file, encoding, callback)
- `file` ist ein `String` (Pfad zur Datei)
- `encoding` ist ein `String` und defaulted zu `binary`
- Moegliche `encodings` sind z.B. `utf8` , `base64` , `hex` , `ascii`
- `callback` ist eine `Function`


## FS Beispiel

Datei ohne spezifisches encoding auslesen

```javascript
const fs = require('fs');

fs.readFile('./foo.txt', (err, data) => {

	if (err) throw err;

	console.log(data instanceof Buffer); // true
	console.log(typeof data);            // 'object'
	console.log(data.toString('utf8'));  // 'foobar'
	console.log(data.toString('hex')) ;  // '666f6f6261720a'
	console.log(data);                   // '<Buffer 66 6f 6f 62 61 72 0a>'

});
```


## FS Beispiel

Datei mit spezifischem encoding auslesen

```javascript
const fs = require('fs');

fs.readFile('./foo.txt', 'utf8', (err, data) => {

	if (err) throw err;

	console.log(data instanceof Buffer); // false
	console.log(typeof data);            // 'string'
	console.log(data.toString('utf8'));  // 'foobar'
	console.log(data.toString('hex')) ;  // 'foobar'
	console.log(data);                   // 'foobar'

});
```


## Live Coding

- Google nach API zu fs.writeFile()
- Lese Inhalt aus einer Datei
- Schreibe Inhalt in eine Datei


= Nodeschool

# Nodeschool

## Nodeschool

- Gehe auf [nodeschool.io](https://nodeschool.io)
- Folge dem `learnyounode` Tutorial
- Folge dem `javascripting` Tutorial
- Folge dem `elementary-electron` Tutorial

