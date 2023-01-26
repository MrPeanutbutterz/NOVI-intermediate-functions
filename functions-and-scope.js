
// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


/* MIJN STAPPENPLAN:
eerst wil ik een variable die bij houd hoeveel cijfers gelijk of meer dan 8 zijn, net als een teller
dan wil ik door de lijst lopen met een for loop
als de waarde gelijk of meer dan 8 is wil ik dat de teller er 1 bij doet
wanneer de loop klaar is wil ik de waarde van de teller terug sturen zodat de diplomas besteld kunnen worden
 */


/*  1b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(grades) {

    let passed = 0

    for (let grade of grades) {
        if (grade >= 8) {
            passed++
        }
    }
    return passed
}

console.log(cumLaude(grades))
console.log(cumLaude([6, 4, 5]))
console.log(cumLaude([8, 9, 4, 6, 10]))

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143


/* MIJN STAPPENPLAN:
voor deze functie wil ik een variable aanmaken die alle cijfers bij elkaar optelt
dan loop ik door de lijst met cijfers en tel ik elk cijfer op bij de variable
als ik door de lijst ben wil ik de variable delen door het aantal cijfers wat ik bij elkaar heb opgeteld
dit doe ik met cijferlijst.length
dan return ik de waarde van de variable
 */


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(grades) {

    let average = 0

    for (let grade of grades) {
        average = average + grade
    }
    return average / grades.length
}

console.log(averageGrade(grades))
console.log(averageGrade([6, 4, 5]))
console.log(averageGrade([8, 9, 4, 6, 10]))

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


//OPMERKING: dit kan je ook doen door de return een .toPrecision(3) te geven of zoals het voorbeeld hieronder
console.log(averageGrade(grades).toPrecision(3))
console.log(averageGrade([6, 4, 5]).toPrecision(3))
console.log(averageGrade([8, 9, 4, 6, 10]).toPrecision(3))

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

/* MIJN STAPPENPLAN
eerst wil ik weer een variable aanmaken die op 0 staat
dat wil ik met een for loop door de lijst lopen
dan vraag ik: als het cijfer in de lijst hoger is dan de variable, dan word de variable het hogere cijfer
als de for loop klaar is return ik de variable
 */

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades) {

    let highestGrade = 0

    for (let grade of grades) {
        if (grade > highestGrade) {
            highestGrade = grade
        }
    }
    return highestGrade
}

console.log(highestGrade(grades))
console.log(highestGrade([6, 4, 5]))
console.log(highestGrade([8, 9, 4, 6, 10]))