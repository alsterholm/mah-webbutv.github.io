---
title: Inlämningsuppgift 6
code: da122a
disqus: 1
---

# Inlämningsuppgift 6

## Inledning

I denna inlämningsuppgift ska vi se hur vi kan använda oss av JavaScript på webbplatser. Webbplatsen som vi ska utgå ifrån är den ni gjorde i inlämningsuppgift 3 (HTML och CSS). Så börja med att göra en kopia av tidningssidan och spara den i en ny mapp. Det är viktigt att ni låter den "gamla" webbplatsen som ni gjorde innan ligga kvar eftersom den tillhör en annan inlämningsuppgift. När ni gjort detta är ni redo att börja på denna inlämningsuppgift.

I denna uppgiften **måste** all JavaScript kod vara i ett eget dokument (gäller även "event handlers").

## Uppgift

### 1. Registreringsformulär

Vi ska nu lägga till ett formulär på sidan där vi kan starta en prenumeration av tidningens nyhetsbrev. Till formuläret ska det göras kontroll så att det finns ett namn inskrivet och att epost-adressen är giltlig. Detta för att undvika spam.

**Krav**

* Formuläret ska bestå av två inmatningsfält, ett för namn och ett för epost-adress
* Det ska kontrolleras så att en person skriver in sitt namn i det första fältet - om personen inte gör det ska dem bli påminda att de glömt skriva in sitt namn genom en popup-ruta
* Det ska kontrolleras så att det verkligen är en riktig epost-adress som skrivs in i den andra fältet. Om det inte är en riktig epost-adress ska en popup-ruta berätta för användaren att "epostadressn är inte korrekt", där epostadressen är det som skrevs in i fältet
* Vi ska inte skickas vidare från sidan innan både korrekt namn och epost-adress är ifyllda
* När de inskriva uppgifterna är korrekta ska vi komma till en ny sida (enkel sådan) som säger "Tack! Du är nu anmäld till nyhetsbrevet."
* Formuläret ska fungera även om vi har JavaScript inaktiverat (utan fungerande kontroll av fälten)

**Tips**

* Använd reguljära uttryck (regular expressions) för att kontrollera så att epost-adressen är korrekt
* Använd "event handler" `onsubmit` för att aktivera kontrollen av fälten i formuläret

### 2. Länkvarning

När vi klickar på en länk som leder utanför tidningens webbplats ska vi bli varnade att vi håller på att lämna sida och få upp en ruta som säger "Vill du verkligen lämna webbplatsen?" med svarsalternativen "OK" och "Avbryt". Detta för att vi inte av misstag ska lämna webbplatsen. Om ni inte har några externa länkar på sidan så får nu för denna uppgift lägga till några.

**Krav**

* På alla externa länkar ska vi få förfrågan om vi vill lämna webbplatsen
* Svarar vi "OK" lämnar vi webbplatsen
* Svarar vi "Avbryt" stannar vi kvar på webbplatsen
* Det är **inte** godkänt att ge alla länkarna ett eget id, utan använd klasser istället

**Tips**

* Ge alla länkar som är externa klassen "external" eller liknande. På så sätt kan du koppla en funktion som utför frågan till när vi klickar på en länk med klassen "external"

### 3. Bildförstoring

Vi vill även att när vi klickar på en bild som tillhör en artikel i tidningen så ska den bilden öppnas i en större version i ett nytt fönster. Har ni inga artiklar i er tidning så får ni lägga till några för denna uppgiften.

**Krav**

* Funktionen ska vara generell och fungera på sidans alla bilder
* Det är **inte** godkänt att ge alla bilderna ett eget id, utan använd klasser istället

**Tips**

* Ha två versioner av samma bild, en stor och en liten. Du kan exempelvis döpa den lilla versionen av bilden till `bild.jpg` och den stora versionen till `bild_stor.jpg` så att det finns ett generellt mönster på hur bilderna döps. När det sedan är dags att öppna en bild i ett nytt fönster gör du om bildens källa från `bild.jpg` till `bild_stor.jpg` och öppnar den nya bilden i ett nytt fönster
* Använd funktionen "[split()](http://www.w3schools.com/jsref/jsref_split.asp)" för att skapa bildens nya källa
* Använd pekaren `this` för att hämta den aktuella bildens (den man klickade på) källa
* Använd funktionen "[window.open()](http://www.w3schools.com/jsref/met_win_open.asp)" för att öppna ett nytt fönster

## Inlämning

*Inlämningsuppgiften är individuell, vilket innebär att samarbete inte är tillåtet.*

När ni är klara med alla uppgifterna så ska ni skicka in dessa som en `.zip` på It's learning. Ni ska även publicera allt på dvwebb och därmed skicka med denna länken på It's learning också.

Lycka till!
