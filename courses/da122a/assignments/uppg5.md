---
title: Inlämningsuppgift 5
code: da122a
disqus: 1
---

# Inlämningsuppgift 5

## Inledning

Denna inlämningsuppgift fortsätter att beröra grundläggande JavaScript, men på en något mer avancerad nivå än den förra inlämningsuppgiften. I denna inlämningsuppgiften kommer det tas hänsyn till att ni:

1. Skriver JavaScript-koden i ett separat dokument
2. Indenterar er kod väl
3. Skriver er kod i funktioner, som ni sedan kallar på

Innan ni börjar på uppgifterna så skriv ut ert namn och datorid genom JavaScript högst upp i filen ni lämnar in (genom den inbyggda funktionen `document.writeln`).

## Uppgift

**1. Adderingsfunktion**

Nu ska vi göra en funktion som hjälper oss att räkna ut summan av två tal. Talen ska väljas av användaren och summan av de två talen ska presenteras genom en popupruta. Vi ska bygga en funktion, som förutom att räkna ut summan, ska kontrollera att det är siffror som användaren matat in. När kontrollen är gjord och summan uträknad ska funktionen returnerna resultatet. Händelseförlopp:

1. Användaren matar in två siffror som ska adderas med varandra via två inmatningsrutor
2. Användaren får sedan svaret (eller felmeddelandet) genom en popup-ruta

**Funktionen som räknar ut summan ska:**

* Kontrollera så att det är siffror som matas in. Om inte, returnera en sträng med lämpligt felmeddelande
* Om det är siffror som matats in, addera dessa och returnera lämplig sträng

Resultatet ska sedan presenteras för användaren i en popup-ruta.

**Tips**

* När ni adderar de inskrivna talen så tolkas de som strängar, dvs. 5 + 6 = 56, enligt datorn. Vi måste därför förtydliga för datorn att de inmatade talen är siffror som man kan räkna med innan vi adderar dem med varandra. Det kan man göra med den inyggda funktionen "[parseInt()](http://www.w3schools.com/jsref/jsref_parseInt.asp)"

Nedan finner ni ett exempel på hur resultatet kan se ut, i detta fället när en användare matat in `9` och `8` där resultatet är `17`.

![Exempel 1](/courses/da122a/material/inl5_bild1.png) _Exempel_

**2. Filmsamling**

Ni ska nu skapa en filmsamling på minst fem stycken filmer som ni ska spara i en `Array`. När ni gjort detta ska ni skriva ut filmsamlingen två gånger, en med stigande sortering och en med fallande.

1. Skapa först en `Array` där du sparar dina filmer
2. Gör sedan funktionen `listMovies` som tar emot argumentet `movies`, vilket ska vara en `Array` fylld med filmer. Funktionen ska sedan:
    * Skriva ut filmerna i stigande ordning efter filmens titel
    * Skriva ut filmerna i fallande ordning efter filmens titel
    * Samt skriva ut rubrik om listan är stigande eller fallande

Utskriften kan se ut såhär (dock är detta ett exempel med `console.log`, ni ska använda `document.writeln`), fast med egna filmer:

![Exempel 2](/courses/da122a/material/inl5_bild2.png) _Exempel_

**3. Filmsamling - med betyg**

Nu ska vi förbättra vår filmsamling genom möjligheten att betygsätta filmerna! När vi gjort detta så kan vi få fram statistik som t.ex. genomsnittsbetyg, bästa film, sämsta film m.m. I denna uppgift nöjer vi oss med att räkna ut genomsnittsbetyget.

Nedan presenteras ett förslag till arbetsätt. Det innebär att det är ett sätt att lösa uppgiften och inte att den behövs lösas på detta sätt. Med andra ord så är det OK och välkommet med andra lösningar. En annan lösning än den som presenteras nedan kan t.ex. innebära nästlade arrayer.

Ni kan lösa uppgiften genom att använda er av två separata arrayer. En array ska då innehålla filmnamnet och den andra arrayen ska innehåll betyget. Genom att göra en funktion som sparar en film och betyg samtidigt kan ni synkronisera dessa två arrayer så att t.ex. filmen på index `2` i arrayen `movies` har betyget på index `2` i arrayen `ratings`. Se exempel i tabellen nedan:

{% highlight bash linenos %}
Array: movies       Array: ratings
index   värde       index   värde
  0     Star Wars     0       5
  1     Inception     1       4
  2     Fight Club    2       5
{% endhighlight %}

Och så vidare.

Detta innebär alltså att filmen "Star Wars" (index `0` i arrayen `movies`) har betyget 5 (index `0` i arrayen `ratings`). Filmen "Inception" (index `1` i arrayen `movies`) har betyget 4 (index `1` i arrayen `ratings`). osv.

Denna uppgiften behöver tre funktioner:

**1.** `addMovie(title, rating)`

Funktionen `addMovie` ska lägga till en film i arrayen `movies` och dess betyg i arrayen `ratings`. Vi ska skicka med två argument till funktionen, titeln på filmen samt filmens betyg. Eftersom vi lägger till titeln och betyget samtidigt kommer vi att kunna koppla ihop dem genom att ange samma index i de båda arrayerna (se exempelrutan ovan för detta).

**2.** `printMovies()`

Funktionen `printMovies` ska skriva ut alla inlagda filmer tillsammans med korrekt betyg.

**3.** `getAverage(ratings)`

Funktionen `getAverage` ska returnera det genomsnittliga betyget för de inlagda filmerna.

**Förslag på arbetsupplägg:**

1. Börja med att skapa de två arrayer där vi ska lagra våra filmtitlar och betyg
2. Skapa sedan funktionen `addMovie(title, rating)` så att vi kan lägga till filmer med betyg i våra nyskapade arrayer
3. Kör funktionen `addMovie` minst fem gånger (med titel och betyg som argument) så att vi får några filmer och betyg sparade
4. Skapa funktionen `printMovies`
5. Testkör så att funktionen `printMovies` skriver ut filmens titel med rätt betyg
6. Skapa funktionen `getAverage(ratings)` och testkör så att den fungerar
7. Skriv ut antal sedda filmer och avsluta med att presentera antalet sedda filmer tillsammans med medelbetyg

**Tips**

* För att lägga in ett element sist i en array så kan ni använda "[push()](http://www.w3schools.com/jsref/jsref_push.asp)"
* En snygg lösning är att fråga användaren efter filmer och betyg (detta är frivilligt)

Utskriften kan se ut såhär (dock är detta ett exempel med `console.log`, ni ska använda `document.writeln`):

![Exempel 3](/courses/da122a/material/inl5_bild3.png) _Exempel_

## Inlämning

*Inlämningsuppgiften är individuell, vilket innebär att samarbete inte är tillåtet.*

Ni ska skriva all er javaScript-kod i ett separat javaScript-dokument (klicka här för att ladda ner en mall) och sedan skicka in det dokumentet på it's learning när ni har slutfört alla uppgifter. Ni ska även ladda upp dokumentet på er dvwebb och skicka med länken när ni lämnar in.

Ni ska skriva all er JavaScript-kod i ett separat dokument (dvs. med filändelsen `.js`) och sedan skicka in allt som en `.zip` på It's learning (ni kommer ha en HTML-fil och en JavaScript-fil). Ni ska även ladda upp dessa på dvwebb och således behöver ni även inkludera länken dit.

Glöm inte att skriva ert namn och datorid högst upp i filen!

Nedan finner ni en exempelmall (HTML + JavaScript) för inlämningen:

**index.html**

{% highlight html linenos %}
<!doctype html>
<html>
    <head>
        <title>Inlämningsuppgift 5</title>
        <meta charset="utf-8">
    </head>
    <body>
        <script src="main.js"></script>
    </body>
</html>
{% endhighlight %}

**main.js**
{% highlight js linenos %}
/* Här kan ni placera ert namn och dator-id. */

/**
 * Uppgift 1
 * =========
 */

/**
 * Uppgift 2
 * =========
 */

/**
 * Uppgift 3
 * =========
 */
{% endhighlight %}

Lycka till!
