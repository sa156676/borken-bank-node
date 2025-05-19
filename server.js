const IBANValidator = require('iban-validator-js');

// Das sqlite3-Modul muss im Terminal installiert werden: npm install sqlite3
const sqlite3 = require('sqlite3').verbose(); // Importiert das sqlite3-Modul

// Neue SQLite-Datenbankverbindung erstellen (Datei: bank.db)
const db = new sqlite3.Database('./bank.db', (err) => {
 
	// Wenn err ungleich null ist, dann wird die Fehlermeldung auf der Konsole ausgegeben. 
	// Wenn err gleich null ist, dann wird die Erfolgsmeldung auf der Konsole ausgegeben. 
	if (err) {
        console.error('Fehler beim Öffnen der Datenbank:', err.message);
    } else {
        console.log('Verbindung zur SQLite-Datenbank hergestellt.');
    }
});

// Tabelle "Kunde" anlegen, falls sie noch nicht existiert
// Tabellen werden angelegt mt dem Befehl CREATE TABLE
// IF NOT EXISTS sorgt dafür, dass die Tabelle nur einmal angelegt wird.
// PRIMARY KEY ist der Primärschlüssel der Tabelle. Der Primärschlüssel ist dasjenige
// Attribut, das den Datensatz eindeutig identifiziert.
// AUTOINCREMENT sorgt dafür, dass der Primärschlüssel automatisch hochgezählt wird.
// Für jedes Attribut muss der Datentyp angegeben werden.
// TEXT ist ein Datentyp, der eine Zeichenkette speichert.
// INTEGER ist ein Datentyp, der eine ganze Zahl speichert.
// NOT NULL sorgt dafür, dass das Attribut nicht leer sein darf.

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Kunde (
            KundenNr INTEGER PRIMARY KEY AUTOINCREMENT,
            Nachname TEXT NOT NULL,
            Vorname TEXT NOT NULL,
            Wohnort TEXT,
            PLZ TEXT,
            Strasse TEXT,
            Kennwort TEXT NOT NULL,
            Benutzername TEXT NOT NULL
        )
    `);

    // Suche alle Kunden in der Tabelle "Kunde"
    db.get("SELECT COUNT(*) AS count FROM Kunde", (err, row) => {
       
		// Wenn keine einzige Zeile gefunden wurde, ...
		if (row.count === 0) {
			
			// ... dann wird ein Beispielkunde angelegt.
            db.run(`
                INSERT INTO Kunde (Nachname, Vorname, Wohnort, PLZ, Strasse, Kennwort, Benutzername)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `, ["Muster", "Max", "Musterstadt", "12345", "Musterstraße 1", "passwort123", "maxmuster"]);
            console.log("Beispielkunde wurde angelegt.");
        }
    });
});

// Alle Kunden aus der Tabelle "Kunde" auf der Konsole ausgeben
db.all("SELECT * FROM Kunde", (err, rows) => {
    if (err) {
        console.error("Fehler beim Auslesen der Kunden:", err.message);
    } else {
        console.log("Alle Kunden in der Datenbank:");
        rows.forEach((row) => {
            console.log(row);
        });
    }
});




//Klassendefinition des Kunden 
class Kunde{
	constructor(){
		this.Nachname
		this.Vorname
		this.Benutzername
		this.Kennwort
		//IstEingeloggt ist ein boolean.
		//Der Wert ist entweder wahr oder falsch.
		this.IstEingeloggt

	}
}

//Kundenobjekt deklariert und instanziiert
let kunde = new Kunde();

//Kundenobjekt initialisiert 
kunde.Nachname = "Kiff"
kunde.Vorname = "Pit"
kunde.Benutzername = "pk"
kunde.Kennwort = "123"

//Klassendefinition des Kundenberaters 
class Kundenberater{
	constructor(){
		this.Nachname
		this.Vorname
		this.Telefonnummer
		this.Email
		this.Bild
	} 
}

//Deklaration und Instanziierung
let kundenberater = new Kundenberater();

//Initialisierung
kundenberater.Nachname = "Pass"
kundenberater.Vorname = "Hildegard"
kundenberater.Telefonnummer = "12345 6789"
kundenberater.Email = "h.pass@borken-bank.de"
kundenberater.Bild = "pass.jpg"


'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Der cookie-parser ist für die Verarbeitung der cookies unserer App zuständig.
// Mit dem cookie-parser können wir cookies setzen und auslesen und löschen.
// Man kann Cookies im Browser anzeigen, indem man F12 drückt. 
// Weil man Cookies im Browser sehr einfach auslesen kann, kann man Cookies signieren. 

// Cookies sind Daten, die eine Webseite auf Ihrem Computer zwischenspeichert, wenn Sie dieser besuchen. 
// Dadurch können dem Nutzer bei erneutem besuch der Webseite personalisierte Inhalte angezeigt werden. 
// Zum Beispiel können Cookies ganz konkret einen Warenkorb nach Tagen wieder anzeigen, obwohl der Nutzer sich bei dem Händler noch nicht registriert hat. 

// In der Banking-App sollen Cookies wie folgt eingesetzt werden : 
//    Wenn sich der Kunde an der App anmeldet, wird ein Cookie in seinem Browser gespeichert. 
//    Der Cookie enthält seine Kundendaten. 
//    Immer, wenn der Kunde nach der Anmeldung in der App einen Button drückt, werden seine Kundendaten vom Browser an den Server übergeben.
//    Der Server weiß dadurch, mit welchem Kunde er es zu tun hat. 
//    so ermöglichen wir, dass mehrere Kunden gleichzeitig mit dem Server interagieren können.

// Die Bibliothek email-validator prüft emails auf syntaktische Korrektheit.
// Die Anforderungen an gültige Mails sind exakt festgelegt im RFC 5322

const validator = require("email-validator"); 

// Die Funktion validate wird auf das validator-Objekt aufgerufen.
// Als Parameter wird eine Mail-Adresse an die Funktion übergeben.
// Der Rückgabewert der Funktion ist true oder false.
validator.validate("test@email.com"); // true 

 if(validator.validate("stefan.baeumer@berufskolleg-borken.de")){
	console.log("Gültige Email.")
}else{
	console.log("Ungültige Email.")
}




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

app.use(cookieParser())

// Geheimer Schlüssel für signierte Cookies
const secretKey = 'mein_geheimer_schluessel';
//app.use(cookieParser(secretKey)); 







//Die app.get wird abgearbeitet, sobald die Index-Seite angesurft wird 
app.get('/', (req, res) => {

	
	//res ist die Antwort des Servers an den Browser
	//send() ist die Anweisung etwas an den Browser zu schicken
	//'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird. 
	//res.send('Hello remote world!\n');

	//Das res-Objekt kann noch mehr als nur ein Zeichenk ette an den Browser zu senden.
	//Das res-Objekt kann mit der Funktion render() eine HTML-Datei an den Browser senden 
	
	if(kunde.IstEingeloggt){

		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert. 
		res.render('index.ejs',{});

	}else{

		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert. 
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});

	}

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

//Die app.get wird abgearbeitet, wenn die Seite im Browser angesurft wird.
app.get('/login', (req, res) => {

    kunde.IstEingeloggt = false;
	console.log("kunde,IstEingeloggt:" + kunde.IstEingeloggt)


	res.render('login.ejs',{
		Meldung: "Bitte Benutzername und Kennwort eingeben."
	});
});

//Die app.post wird abgearbeitet, wenn das Formular auf der Seite abgesendet wird 
app.post('/login', (req, res) => {

	//Der Benutzername wird vom Browser an den Server übergeben
	let benutzername = req.body.IdKunde;
	console.log("login: Benutzername: " + benutzername)

	//Das Kennwort wird vom Browser an den Server übergeben.
	let kennwort = req.body.Kennwort;
	console.log("login: Kennwort: " + kennwort)

	// Es muss geprüft werden, ob der Kunde mit diesem Benutzername das richtige Kennwort eingegeben hat.

	let meldung = "";

	//Die Kontrollstruktur prüft auf die Korrektheit der Zugangsdaten 
	if(kunde.Benutzername == benutzername && kunde.Kennwort == kennwort){
    console.log("Die Zugangsdaten wurden korrekt eingegeben.")
	meldung = "Die Zugangsdaten wurden korrekt eingegeben"
	
	// Die Eigenschaft IstEingeloggt wird auf true gesetzt.
	kunde.IstEingeloggt = true;
	console.log('kunde.IstEingeloggt: ' + kunde.IstEingeloggt)


	// Wenn der Kunde seine Credentials korrekt eingegeben hat, wird ein Cookie gesetzt.
	// Um das ganze Kundenobjekt im Cookie speichern zu können, wird das Kundenobjekt in eine Zeichenkette umgewandelt.
	// Dazu wird die stringify-Funktion auf das JSON-Objekt aufgerufen. 
	res.cookie('istAngemeldetAls', JSON.stringify(kunde),{ maxAge: 900000, httpOnly: true, signed: false});
	console.log("Das Kundenobjekt wurde im Cookie gespeichert."); 


	//Wenn die Eingabedaten korrekt sind, dann wird die Index-Seite gerendert.
	res.render('index.ejs', {
		Meldung: meldung
	});

	}else{
		console.log("Die Zugangsdaten wurden NICHT korrekt eingegeben.")
		meldung = "Die Zugangsdaten wurden NICHT korrekt eingegeben."

		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite erneut gerendert.
		res.render('login.ejs', {
			Meldung: meldung
		});
	}

	
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

app.post('/kontenuebersicht', (req, res) => {
	
	if(kunde.IstEingeloggt){

		let kontonummer = req.body.Kontonummer;
		console.log("kontonummer: " + kontonummer)

		let bankleitzahl = "40154530"

		let laenderkennung = "DE"
		
		let pruefziffer = IBANValidator.getCheckDigit(laenderkennung, bankleitzahl, kontonummer);
		
		let iban = laenderkennung + bankleitzahl + kontonummer;



		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('kontenuebersicht.ejs',{
			Kontonummer: "",
			Meldung: ""
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
});

app.get('/kontenuebersicht', (req, res) => {
	
	if(kunde.IstEingeloggt){

		// Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('kontenuebersicht.ejs',{
			Kontonummer: "",
			Meldung: ""
		});

	}else{
		
		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	}
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