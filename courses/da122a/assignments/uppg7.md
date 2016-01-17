---
title: Inlämningsuppgift 7
code: da122a
disqus: 1
---

# Inlämningsuppgift 7

## Inledning

Nu ska ni göra er tidningssida ännu mer interaktiv. Fokus i denna uppgift ligger på att sidan ska förändra sig beroende på användarens beteende. Detta ska göras i två delar. Först ska vi göra menyn ihoppfällbar/expanderbar och sedan ska vi göra så att vi kan välja utseenden på sidan. Vi ska dessutom komma ihåg vilket utseende användaren valde och automatiskt visa sidan i detta nästan gång hen besöker den.

All JavaScript-kod **måste** vara i ett eget dokument (gäller även "event handlers) och webbplatsen ska fungera i Internet Explorer (version 9 eller nyare), Mozilla Firefox och Google Chrome.

## Uppgift

### 1. Meny som kan expandera och fällas ihop

Menyn till vänster på er sida är ganska lång och svår att få en bra överblick över. Därför ska vi nu göra så att endast topprubrikerna syns, och när vi klickar på respektive toppmeny ska undermenyn för denna fällas ut/in beroende på om den är in-/utfälld.

**Krav**

* Ni får **inte** använda `id` för varje topprubrik, utan använd klasser istället. Detta för att er funktion som öppnar/stänger menyn ska bli generell och för att vi vill slippa ändra i koden om vi lägger till nya rubriker osv. 

**Tips**

* Ett sätt att lösa visa/dölj problemet är att använda `style.display` egenskapen på undermenyerna (tänk på värdena `none` och `block`)
* När det gäller att hämta element i JavaScript så rekommenderas det att använda `querySelectorAll`, [läs mer om denna här](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

### 2. Personlig utseende på sidan

Användaren ska kunna välja ett bland olika utseenden på sidan genom en dropdown-meny. När användaren valt ett alternativ ska sidans utseende bytas till valt utseende samt ska ni spara valet i "[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)" (en cookie är också tillåtet). Detta så att nästa gång användaren besöker er sida ska den visas med samma utseende som användaren valde vid senaste besöket. Dessutom ska det valda alternativet också vara markerat i dropdown-menyn när sidan laddas

Ni ska alltså:

* Skapa en dropdown-meny där användaren kan välja utssende på sidan
* Skapa fyra stycken olika CSS-mallar som ger sidan olika utseende. Beroende på vilket alternativ som användaren väljer i dropdown-menyn ska rätt CSS-mall användas till sidan
* När användaren väljer ett utseende sparar ni detta val i `localStorage` (eller i en cookie), så att ni när användaren nästa gång besöker sidan kan vi veta vilket utseende som hen senast valde
* När sidan besöks igen ska det senast valda utseendet aktiveras (genom att läsa av från `localStorage` eller er cookie), och även dropdown-menyn ska ändras så att rätt utseende-val är aktiverat
* Om inget utseende finns sparat i `localStorage` eller i en cookie så ska standard-utseendet laddas och standard-alternativet vara aktivt i dropdown-menyn

**Krav**

* Alternativet ska sparas i `localStorage` eller en cookie (minst i en vecka i så fall)

**Tips**

* Det enklaste att spara i `localStorage` eller i en cookie är sökvägen (filnamnet) på CSS-mallens namn
* Använd "event handlern" `onchange` på dropdown-menyn, då denna aktiveras när ett val ändras i en dropdown-meny
* [Läs igenom dokumentationen för localStorage innan ni börjar](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    * [Här finner ni en mindre guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

## Inlämning

*Inlämningsuppgiften är individuell, vilket innebär att samarbete inte är tillåtet.*

När ni är klara med alla uppgifterna så ska ni skicka in dessa som en `.zip` på It's learning. Ni ska även publicera allt på dvwebb och därmed skicka med denna länken på It's learning också.

Lycka till!
