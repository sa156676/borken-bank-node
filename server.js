class Kunde{
	constructor(){
		this.Nachname
		this.Vorname
		this.Benutzername
		this.Kennwort
	}
}

let kunde = new Kunde();
kunde.Nachname = "Kiff"
kunde.Vorname = "Pit"
kunde.Benutzername = "pk"
kunde.Kennwort = "123"



'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.

const express = require('express');
const bodyParser = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

// Es wird der App bekanntgegeben, wo die styles zu finden sind 
app.use(express.static('public'))
app.set('view engine', 'ejs')  

// Der Bodyparser wird in der App eingebunden 

app.use(bodyParser.urlencoded({extended: true}))





app.get('/', (req, res) => {

	
	//res ist die Antwort des Servers an den Browser
	//send() ist die Anweisung etwas an den Browser zu schicken
	//res.send('Hello remote world!\n');

	//Das res-Objekt kann noch mehr als nur ein Zeichenkette an den Browser zu senden.
	//Das res-Objekt kann mit der Funktion render() eine HTML-Datei an den Browser senden 
	res.render('index.ejs',{});
});

// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert,
// die angefragte Seite an den Browser zurückzugeben .
// Der Server arbeitet dazu die Funktion app.get('agb) ... ab.
app.get('/agb',(req,res)=>{

    // Der Server gibt die gerenderte EJS-Seite an den Browser zurück. 
    res.render('agb.ejs' ,{});
})

app.get('/hilfe',(req, res)=>{

	res.render('hilfe.ejs', {})
})

app.get('/login', (req, res) => {
	res.render('login.ejs',{
		Meldung: "Alles easy."
	});
});

app.post('/login', (req, res) => {

	let benutzername = req.body.IdKunde;
	console.log("login: Benutzername: " + benutzername)

	let kennwort = req.body.Kennwort;
	console.log("login: Kennwort: " + kennwort)

	// Es muss geprüft werden, ob der Kunde mit diesem Benutzername das richtige Kennwort eingegeben hat.

	let meldung = "";

	if(kunde.Benutzername == benutzername && kunde.Kennwort == kennwort){
    console.log("Die Zugangsdaten wurden kirrekt einegegeben.")
	meldung = "Die Zugangsdaten wurden korrekt eingegeben"
	}else{
		console.log("Die Zugangsdaten wurden NICHT korrekt eingegeben.")
		meldung = "Die Zugangsdaten wurden NICHT korrekt eingegeben"
	}

	res.render('login.ejs', {
		Meldung: "Sie wurden erfolgreich angemeldet"
	});
});



// Die Funktion app.get ('/geldAnlegen...) wir abgearbeitet, wenn der Benutzer die Seite geldAnlegen
// im Browser ansurft/ anklickt. 

app.get('/geldAnlegen', (req, res) => {

    // Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben. 
	// Dazu wird die Funktion render() aufgerufen.

	res.render('geldAnlegen.ejs',{

        // In der gelAnlegen.ejs gibt es die Variable Betrag und Laufzeit.
		// Der Server übergibt die folgenden Werte an den Browser. 

		Betrag: 100, 
	});
});

app.post('/geldAnlegen', (req, res) => {

	// Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
	// Der Wert der Variablen Betrag wird aus dem body der Kundenanfrage (req) ausgelesen und zugewiesen an die lokale Variable
	// namens Betrag 

	let betrag = req.body.Betrag;
	console.log("geldAnlegen: Gewünschter Betrag: " + betrag + " Euro")

	let laufzeit = req.body.Laufzeit;
	console.log("geldAnlegen: Gewünschte Laufzeit: " + laufzeit + " Jahre")

	let zinssatz = 0.1 
    
	let zinsen = betrag * zinssatz; 


	res.render('geldAnlegen.ejs',{
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: "Ihre Zinsen betragen : " + zinsen
	});
});

app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der Konsole 
//angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll
// Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);

//require('./uebungen/01-grundlagen.js');

//require('./uebungen/03-objekte.js');
//require('./Klausuren/klausurtest20240930.js');
//require('./uebungen/04-funktionen')


