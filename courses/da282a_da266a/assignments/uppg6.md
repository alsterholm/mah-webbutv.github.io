---
title: Inlämningsuppgift 6
code: da282a_da266a
---

# Inlämningsuppgift 6

Betyg: U/G

## Syfte

Syftet med den sista inlämningen är att försöka knyta samman alla de delar som ni lärt er. Denna inlämning ger er ganska fria händer så länge ni följer de krav som ställs. Inför denna uppgiften rekommenderas det givetvis att ni gjort och förstått de andra uppgifterna.

## Uppgiften

Tanken med denna uppgiften är att ni ska göra en mer komplett webbapplikation med ramverket Flask. Det finns fasta krav som denna måste erhålla dock är valet upp till er vad ni vill den ska ha för typ av innehåll, nedan presenteras ett exempel utifall att ni inte kommer på någonting själva.

### Innehållskrav

* Det måste finnas möjlighet för att lägga till innehåll genom ett formulär
* Det måste finnas möjlighet för att redigera innehåll genom ett formulär
* Allt innehåll måste sparas i en JSON-fil
* Det måste finnas möjlighet att få ut **all** data i formatet JSON (t.ex. alla personer) **och** som en HTML-sida (där innehållet presenteras på ett användbart vis)
    * Tips ha en vanlig "Route" för HTML-sidan och en `/api/...` för JSON-varianten
* Det måste finnas möjlighet att få ut **en** del av er data i formatet JSON (t.ex. en person) **och** som en HTML-sida (där innehållet presenteras på ett användbart vis)
    * Tips ha en vanlig "Route" för HTML-sidan och en `/api/...` för JSON-varianten
* Det måste finnas en sk. 404-sida (dvs. om en användare besöker en sida som inte finns)
* Webbplatsen måste ha godtycklig användbarhet genom att ni påverkar utseendet med CSS
* Webbplatsen måste ha en global navigation så en användare kan navigera mellan era olika sidor

### Exempel

Som förslag till webbapplikation kan ni tänka er att ni gör en egen variant av Wikipedia. Det vill säga att en användare kan lägga till artiklar och redigera befintliga artiklar. Alla dessa har en rubrik, datum för publikation samt textinnehåll. För att läsa en arikel hade en användare kunnat tänkas besöka `/articles/:name` där namnet på artikeln hade varit en sk. "slug" (t.ex. "what-is-an-api" från "What is an API?", läs mer här [Slug](http://stackoverflow.com/questions/5574042/string-slugification-in-python)). Om en användare istället hade besökt `/api/articles/:name` hade den fått innehållet i formatet JSON. Om en användare hade besökt `/articles` hade den fått en lista (ul) presenterad med varje rubrik som en länk till respektive artikel. Väl inne på en artikel kan det finnas en länk ("redigera") som skickar vidare en användare (t.ex. till `/articles/:name/edit`) där det är ett formulär förifyllt med allt innehåll för artikeln med möjlighet för att redigera och därmed också spara artikeln.

## Kravspecifikation

* Placera alla uppgifter i en och samma Pythonfil med namnet `assignment_6.py`
* Använd sunft förnuft och dokumentera er Pythonkod med kommentarer där det kan anses vara lämpligt, t.ex. beskrivning av hur en funktion fungerar och ska användas
* Er Pythonkod ska fungera, dvs. den får inte generera något felmeddelande
* Er Pythonkod ska ha logiska namn vad gäller variabler och funktioner, dvs. inte `a = 10` eller `def x():`
* Kontrollera att er Pythonkod inte innehåller kodexempel från uppgiftsbeskrivning eller gammla kommentarer

**För specifika krav gällande uppgiften gå till "Innehållskrav".**

## Inlämning

**Glöm inte kontrollera att ni skickat med svar på alla uppgifter och att ni följt kravspecifikationen.**

När du är färdig med din uppgift ska du ladda upp denna som en `.zip`-fil innehållande alla dina filer på It's Learning. Döp denna enligt formatet `inl6_lisa_a.zip`.

Lycka till!
