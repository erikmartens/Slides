
= DOM API

# DOM API

## DOM API

- Document Object Model
- Manipulation des Inhalts
- HTML ist NICHT DOM
- DOM ist Repraesentation von HTML

## querySelector / querySelectorAll

- Graphbasierter Query
- `querySelector` fuer einzelnes Element
- `querySelectorAll` fuer mehrere Elemente

```javascript
var element = document.querySelector('#status tbody');

console.log(element); // tbody Element API
```

## querySelectorAll

- returned eine Liste
- returned KEIN Array

## querySelectorAll

```javascript
var elements = [].slice.call(document.querySelectorAll('#status tr'));

console.log(elements);
```

## Element API

- `id` fuer CSS Identifier
- `className` fuer CSS Klasse
- `style` fuer CSS Styles
- `data-\*` Attribute fuer Datenverhalten

## Element API

- `innerHTML` Property (Crappy, aber einfach)
- `getAttribute(name)` API
- `onclick` fuer Click Callback
- `document.createElement(tag)` API
- `document.createDocumentFragment()` API

## getComputedStyle

```javascript
let element = document.querySelector('main');
let styles  = window.getComputedStyle(element);

console.log(styles);
```

## Live Coding

- Nutze `querySelector` auf die Status Tabelle
- Generiere HTML aus dem GET Request
- Erstelle tr / td in einer Schleife
- JSON Daten als Inhalt der Tabelle



= Input Elemente

## Input Element

- `input` Tag
- `type` Attribut ( `text` , `range` , `number` , `date` )
- `value` Attribut

## Input Element

```html
<input type="text" value="whatever">
<input type="range" min="10" max="20" value="15">
```

## Button Element

- `button` Tag

## Button Element

```html
<button onclick="whatever()">Click me!</button>
```

## Live Coding

- Toggle Button mit `start` und `stop`
- POST Request zu `botnet.artificial.engineering`
- Port ist `8080`, Pfad ist `/api/Status`
- Sende JSON Inhalt via `xhr.send(data)`
- Inhalt ist: id, action ( `stop` or `start` )
- Hint: Google JSON xhr send MDN

