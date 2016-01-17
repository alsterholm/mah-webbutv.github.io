---
title: Inlämningsuppgift 4
code: da122a
disqus: 1
---

# Inlämningsuppgift 4

Betyg: U/G

## Inledning

Denna inlämningsuppgift kommer att handla om grunderna i programmeringsspråket javaScript. Inlämningsuppgiften behandlar bl.a. variabelhantering, logik, loopar, if-satser m.m. som tas upp i kurslitteratur samt i material som finns att tillgå på vår kurswebbplats. Om programmering är nytt för er så rekomenderas det att gå igenom litteratur och övningar grundligt för att öka sin förståelse inför denna inlämningsuppgift.

Innan ni börjar på uppgifterna så skriv ut ert namn och datorid genom javaScript högst upp i filen ni lämnar in (genom den inbyggda funktionen `document.writeln()`).

## Uppgift

### 1. Längdenhet-omvandlare

Vi ska göra ett skript som ger besökaren möjlighet att beräkna hur många yards x antal meter är. Det ska ske såhär:

1. En popup-ruta ska dyka upp, där man blir instruerad att skriva in det antal meter man vill konvertera till yards.
2. När användaren klickat "ok" ska ska ni **räkna ut** antalet yards, **avrunda** svaret till närmsta heltal och visa en **popup-ruta** med svaret för användaren. Skulle användaren **inte ha skrivit in siffror**, utan istället t.ex. bokstäver ska detta meddelas och istället för att visa svaret ska ett felmeddelande visas i popup-rutan.

**Tips**

* För att ta in data från användaren (via popup-ruta), använd den inbyggda funktionen "[prompt()](http://www.w3schools.com/js/js_popup.asp)".
* För att kontrollera så att användaren skrivit in siffror, använd den inbyggda funktionen "[isNaN()](http://www.w3schools.com/jsref/jsref_isnan.asp)".
* För att avrunda antal yards, använd den inbyggda funktionen "[Math.round()](http://www.w3schools.com/jsref/jsref_round.asp)".
* För att sedan presentera svaret/felmeddelandet (via popup-ruta) använd den inbyggda funktionen "[alert()](http://www.w3schools.com/js/js_popup.asp)".

En yard är `0.9144` meter.

Nedan finner ni två exempel på hur det kan se ut:

![Exempel 1](/courses/da122a/material/inl4_bild1.png) _Exempel 1_

![Exempel 2](/courses/da122a/material/inl4_bild2.png) _Exempel 2_

### 2. Räkna med tärningar

Vi ska, rent metaforiskt, slå fem tärningar (varje tärning kan ge poängen 1 - 6) och beräkna det totala antalet poäng som vi får ihop. Det ska gå till såhär:

1. Först skrivs poängen för varje tärning ut (dvs. fem stycken utskrifter)
2. Sedan skrivs det totala summan av alla poäng

**Tips**

* Börja med att skapa en variabel (som du t.ex. kan kalla `var totalSum`) där du håller reda på den totala summan poängen för alla slagna tärningar. Lämpligen tilldelar du denna varibel värdet `0` (eftersom inga tärningar är slagna än)
* Gör sedan en loop (iteration) som slumpar fram ett tal mellan 1 - 6 fem gånger, och som för varje gång lägger till tärningens poäng till den totala summan (variabel "totalSum"). [För att slumpa fram tal läs mer här](http://www.w3schools.com/jsref/jsref_random.asp)
* Skriv sedan ut resultat genom att skriva ut variabeln "totalSum"

Utskriften kan se ut såhär (dock är detta ett exempel med `console.log`, ni ska använda `document.writeln`):

![Exempel 3](/courses/da122a/material/inl4_bild3.png) _Exempel_

### 3. Tärningsspel

Nu ska vi återigen slå med tärningar, fast denna gången ska vi inte fokusera på summan. Vi ska istället slå tre tärningar och sedan kontrollera om alla tre visar samma siffra, två visar samma siffra eller om alla visar olika siffror. Vi kan alltså få tre utfall:

1. Alla tärningar visar samma siffra
2. Två av tärningarna visar samma siffra
3. Alla tärningar visar olika siffror

För att kontrollera att det alternativ som skrivs ut är korrekt ska även tärningarnas siffror skrivas ut.

**Tips**

* Använd er utav if-, else if-, och else-satser för att bestämma vilken av fraserna ovan som ska skrivas ut.

Utskriften kan se ut såhär (dock är detta ett exempel med `console.log`, ni ska använda `document.writeln`):

![Exempel 4](/courses/da122a/material/inl4_bild4.png) _Exempel_

## Inlämning

*Inlämningsuppgiften är individuell, vilket innebär att samarbete inte är tillåtet.*

Ni ska skriva all er javaScript-kod i ett HTML-dokument och sedan skicka in det dokumentet på it's learning när ni har slutfört alla uppgifter. Ni ska även ladda upp dokumentet på er dvwebb och skicka med länken när ni lämnar in.

Ni ska skriva all er JavaScript-kod i ett HTML-dokument (ni kan utgå från mallen nedan) och sedan skicka in detta dokumentet på It's learning när ni är färdiga. Ni ska även ladda upp detta dokumentet på dvwebb och således behöver ni även skicka med länken dit på It's learning.

**Glöm inte att skriva ert namn och datorid högst upp i filen!**

{% highlight html linenos %}
<!doctype html>
<html>
    <head>
        <title>Inlämningsuppgift 4</title>
        <meta charset="utf-8">
    </head>
    <body>
        <script>
            /* Börja med att skriva ut ert namn och dator-id nedan. */

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
        </script>
    </body>
</html>
{% endhighlight %}

Lycka till!
