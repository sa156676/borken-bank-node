const { openDelimiter } = require("ejs")

console.log("Objekte")
console.log("=======")

// Bislang speichern wir Werte in Variablen.
// Bsp: let Vorname = "Hans"
// Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert "Hans".
// In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen. 
// Beispiel: Schüler*innen im Schulverwaltungsprogramm
// interessierende Eigenschaften: Vorname, Nachname, Geburtsdatum, Geburtsort, Klasse, Anschrift, Telefonnummer, ... 
// Bislang haben wir das so gelöst:
// let Vorname = "Hans"
// let Klasse = "GW23A"
// let ...
// Problem: Die Eigenschaften stehen in keinem Zusammenhang. 
// Um den Zusammenhang zwischen den einzelnen Werten herzustellen, gibt es Klassen und Objekte. 
// Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klassen) fest, nach denen Objekte zur
// Laufzeit erstellt werden. Und das geht so : 

class Schueler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

// Die Objekte werden nun aus dem Bauplan (=Klasse) wie folgt erzeugt :

let schueler = new Schueler()
schueler.Vorname = "Hans"
schueler.Nachname = "Meyer"
schueler.Klasse = "GW23A"

// Die Werte können wieder ausgegeben werden :

console.log("Nachname: " + schueler.Nachname + " , Vorname: " + schueler.Vorname)

let schueler2 = new Schueler()
schueler2. Nachname = "Müller"
schueler2.Vorname = "Pit"
schueler2.Klasse = "GW23A"

console.log("Nachname: " + schueler2.Nachname + " , Vorname: " + schueler2.Vorname)

// Um aus dem Bauplan (=Klasse) ein konkretes Objekt zu erzeugen, sind 3 Schritte notwendig: 
// 1. DEKLARATION:     let schueler
//                     Bei der Deklaration wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
// 2. INSTANZIIERUNG:  = new Schueler()
//                     Bei der Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert um 
//                     Eigenschaftswerte aufzunehmen.
// 3. INITIALISIERUNG: schueler. Nachname = "Schmidt"
//                     Bei der Initialisierung werden konkrete Werte in die Speicherzelle geschrieben.  


console.log ("Aufgabe 1")
// Für eine Autovermietung sollen Autos verwaltet werden.
// Erstelle den Bauplan, um dann drei Objekte zu instalziieren

class Auto{
    constructor(){
        this.Preis
        this.Baujahr
        this.Farbe
    }
}

// Aus dem Bauplan werden nun drei Objekte instanziiert: 

let borAb123 = new Auto(); 
let borXy876 = new Auto();
let bohQz253 = new Auto();

// Initialisierung 
borAb123.Preis = 30000 // Zahlen schreibt man immer OHNE Anführungszeichen
borAb123.Baujahr = 2000 
borAb123.Farbe = "blau"

console.log("Preis: " + borAb123.Preis + " , Baujahr: " + borAb123.Baujahr + " , Farbe: " + borAb123.Farbe)

// Das gleiche kann man dann auch noch mit den Kennzeichen "borXy876" und "bohQz253" machen. 

console.log("Aufgabe 2")
// Deklariere, Instanziiere und Initialisiere ein Objekt der realen Welt der eigenen Wahl. 
// Beispiel: Manuela programmiert sich ein Programm zur Verwaltung ihrer Fahrräder: 

class Fahrrad{
    constructor(){
        this.Typ
        this.Preis
        this.Farbe
    }
}

let fahrrad = new Fahrrad()
fahrrad.Typ = "Mountainbike"
fahrrad.Preis = 1000
fahrrad.Farbe = "Rot"

console.log("Typ: " + fahrrad.Typ + " , Preis: " + fahrrad.Preis + " , Farbe: " + fahrrad.Farbe)








