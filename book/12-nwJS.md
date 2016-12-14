
= nw.js

# nw.js

## nw.js

- Fork von WebKit (Blink)
- Fork von node.js
- Quasi-Runtime um Clients UND Server zu bauen


## nw.js

- Gleiche App Struktur wie Chromium Apps
- Zwei Varianten, `SDK` und `normal`
- SDK bundlet Chromium Debugging Tools


## package.json

- `package.json` enthaelt Metadaten


## package.json Beispiel

```json
{
	"main":            "./index.html",
	"name":            "cnc-interface",
	"description":     "CNC Interface (powered by INT-WAW)",
	"version":         "0.0.1",
	"window": {
		"title":       "CNC Interface",
		"icon":        "./icon.png",
		"toolbar":     true,
		"frame":       true,
		"show":        true,
		"transparent": true,
		"width":       640,
		"height":      512,
		"position":    "center",
		"min_width":   400,
		"min_height":  512
	},
	"webkit": {
		"plugin": false
	},
	"nodejs": true
}
```

## package.json

- Wichtig sind `main`, `name` und `nodejs`
- `window / toolbar` fuer Debugging


## Live Coding

- Installiere nwjs von [nwjs.io](https://nwjs.io)
- Mache das Tutorial und bundle das Interface


= node.js Crypto API

# node.js Crypto API

## node.js Crypto API

- Verwendung fuer Bot Mode in unserem Fall


## node.js Crypto API

```javascript
const crypto = require('crypto');

let md5sum = crypto.createHash('md5');

md5sum.update('woot');

let result = md5sum.digest('hex');

console.log(result); // 378b061da0cc7b0dd3fe8c75c2034d6a
```

