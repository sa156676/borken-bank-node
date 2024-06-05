console.log('GRUNDLAGEN');
console.log('==========');

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.');

// Der Wert 1 wird zugewiesen (=) an eine Variable namens a
let a = 1;
let b = 2;

// mit dem Plus-Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt
//mit Hochkommas 
console.log('Der Wert der Variable a ist:'+a);

console.log('Aufgabe 2');
console.log('Gib ds Ergebnis der Addition von a und b an');

//Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
//Wenn links oder rechts Zhlen stehen, wird addiert.
console.log(a+b);
console.log('Das Ergebnis der Addition:' + (a + b));

console.log('Aufgabe 3')
console.log('Gib das Ergebnis der Subtraktion, Multiplikation Division von a und b an');

console.log('Subtraktion:'+ (a-b));
console.log('Multiplikation:'+ (a*b));
console.log('Division:'+ (a/b));

console.log('Aufgabe 4');
console.log('Der Wert von C sei das Ergebnis der Addition von a und b');

let c = a + b;

console.log('c hat den Wert: ' + c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c');

//cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt: zuerst ein Kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b;

// Javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den 
// runden Klammern erwartet sqrt eine Zahl, aus der dann die Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('Die Hypotenuse ist ' + c + ' lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10 % Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');

let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;  /*Das Komma ist zur Entwicklungszeit ein Punkt. */

let kapitalNachEinemJahr=startkapital * (1 + zinssatz);

console.log('Kapital nach einem Jahr: ' + kapitalNachEinemJahr + " EUR.");

let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);

console.log('Kapital nach Zwei Jahren:' + kapitalNachZweiJahren + ' EUR.');

let endkapital = startkapital * Math.pow((1 + zinssatz) , laufzeit )

console.log('Endkapital nach ' + laufzeit + ' Jahren :' + endkapital + 'EUR');

console.log ('Aufgabe 7');
console.log ('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt');

//Im Zeitpunkt Null ist das Endkapital = dem Startkapital
endkapital = startkapital;
console.log(endkapital);

//Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1,1
endkapital = endkapital *  (1 + zinssatz);
console.log(endkapital);

//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen 
endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen
endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen
endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

console.log ('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweisung endkapital = ... mehrfach wiederholt. ');
console.log('um sich Tipparbeit zu sparen und die Wiederholung der Anweisungen in der gewünschten Häufigkeit durchzuführen');
console.log('nutzt der Programmierer eine Schleife.');

startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1; 
laufzeit = 3;

for (let i = 0; i < laufzeit ; i++) {
    endkapital = endkapital * (1 + zinssatz ); 
    console.log('Endkapital nach Jahr ' + (i+1) + ' :' + endkapital + ' EUR.'); 
}


console.log ('Aufgabe 9');
console.log('Wenn der Artikel Lebensmittel ist, dann ist die MwSt 7%, ansonsten 19%');
console.log(' In Excel würde das so aussehen : =wenn(A1=Lebensmittel;7;19');

let artikel = 'Lebensmittel';
let mwStSatz = (artikel === 'Lebensmittel')? 7 : 19;

// Der Ausdruck ist vergleichbar mit Excel. In den runden Klammern findet die Prüfung auf Wahr oder Falsch statt.
// Wenn artikel === "Lebensmittel" wahr ist, wird der Wert vor dem Doppelpunkt zurückgegeben. Ansonsten der Wert hinter dem Doppelpunkt.
// Anders als in Excel ist das einfache Gleichheitszeichen für eione Zuweisung reserviert. 
// Für einen Vergleich muss in Javascript mit zwei oder 3 === gearbeitet werden

console.log(' Der Mehrwertsteuersatz für den Artikel ' + artikel + ' beträgt ' + mwStSatz + ' %.');


console.log ('Aufgabe 10');
console.log(' Hausaufgabe : Eigene Aufgabe mit Wenn-Funktion / if-else-Ausdruck ');

console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 100 € ist, beträgt der Rabatt 20%');
console.log('Ansonsten gibt es keinen Rabatt');

// die Variablen werden deklariert und der Gesamtbetrag mit dem Wert 120 initialisiert.
let Gesamtbetrag = 120;
let Rabatt = 20; 

// Die if Kontrollstruktur kann zwei Fälle unterscheiden. 
if (Gesamtbetrag >= 100) {
    // Wenn die Prüfung in der Runden Klammer wahr ist, wird der Wert 20 zugewiesen.
    Rabatt = 20;
}else{
    Rabatt = 0;
}

console.log('Aufgabe 11');

console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 100 € ist, beträgt der Rabatt 20 %');
console.log('wenn der Gesamtbetrag des Einkaufs zwischen 50 und kleiner 100 € ist, beträgt der Rabatt 10 %');
console.log('Ansonsten gibt es keinen Rabatt');

Gesamtbetrag = 120;
Rabatt = 20;

// Hier werden drei Fälle unterschieden. Dazu muss die if Kontrollstruktur verschachtelt werden.
if (Gesamtbetrag >= 100){
    Rabatt = 10;
}else{
    if (Gesamtbetrag >= 50) {
        Rabatt = 10;
    }else{
        Rabatt = 0;
    }
}

console.log('Aufgabe 12');
console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 200 ist, ist der versand kostenlos.');
console.log('Wenn der Gesamtbetrag des Einkaufs zwischen 100 und kleiner als 200, betragen die Versandkosten 5 €');
console.log('Ansonsten betragen die Versandkosten 10 €');

let Einkaufswert = 200;
let Versandkosten;

if ( Einkaufswert >= 200 ) {
    Versandkosten = 0;
}else{
    if ( Einkaufswert >= 100 ){
        Versandkosten = 5;
    }else{
        Versandkosten = 10;
    }
}
console.log(' Bei einem Einkaufswert von ' + Einkaufswert +' Euro betragen die Versandkosten ' + Versandkosten + ' Euro.');

console.log('Aufgabe 13');
console.log(' Frauen ab 18 zahlen 10 € Eintritt. Männer ab 18 zahlen 15 €. Minderjährige zahlen 6 €');

let Eintritt;
let Alter = 10;
let geschlecht = 'M';

if (geschlecht === 'W' && alter >= 18){
    Eintritt === 10;
}

if (geschlecht === 'M' && Alter >=18){
    Eintritt === 15;
}

if ( Alter < 18){
    Eintritt === 6;
}

console.log(' Bei einem Altrer von ' + Alter + ' Jahren zahlt eine Person mit Geschlecht ' + geschlecht + ' #');

console.log('Aufgabe 14');
console.log('Überprüfe ob eine Person Alt genug ist um Auto zu fahren');
console.log('Wenn die Person 18 Jahre oder älter ist dann soll die Antwort "JA" lauten,');
console.log('Wenn nicht dann soll die Antwort "NEIN" lauten');

let alter = 20;

if(alter >= 18) {
    console.log('JA');
} else {
    console.log('NEIN');
}


