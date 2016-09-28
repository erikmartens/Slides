
// Wir definieren eine Funktion mit drei gebundenen
// Parametern -  a, b und c

var foo = function(a,b,c) {

	console.log('arguments', arguments);

	this.test = "whatever";

	console.log(this, a, b, c);
};


// Wir erstellen eine Funktionsinstanz,
// die Eigenschaften von Object uebernimmt,
// da Function.prototype auf Object leitet

var bar = new foo(1, 2, 3);


// Wir invoken und callen eine Funktion,
// der default Scope ist der aus dem wir
// gerade kommen (in unserem Fall window / global)

foo(2,3,4);


// Wir erstellen uns ein Objekt, mit der
// Property (eigenschaft) "mein"

var bar = { mein: 'objekt' };


// Wir callen unsere Funktion in einem Scope
// und mit statischen Parametern

foo.call(bar, 2, 3, 4, 5, 6, 7);

// Wir callen unsere Funktion in einem Scope
// und mit dynamischen Parametern (in Array-Form)

foo.apply(bar, [ 3, 4, 5 ]);


// Wir invoken unsere Funktion in einem
// statischen Scope und mit statischen Parametern
// a und b (Wert 15 und 16)

var other = foo.bind(bar, 15, 16);


// Wir callen unsere invoked Funktion mit
// den statischen Parametern c, d und e
// (wobei d und e nicht verwendet werden)

other(1,2,3);

