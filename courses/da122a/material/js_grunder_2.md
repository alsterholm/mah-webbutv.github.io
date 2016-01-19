---
title: JavaScript - Grunder 2
code: da122a
disqus: 1
---

# JavaScript - Grunder

## Inledning

Nu när vi tittat på de mest grundläggande bitarna i JavaScript är det dags att ta sig an lite större utmaningar. Nu ska vi börja hämta in data från användare, vi ska räkna i loopar, skapa if-satser och även någon enkel funktion. Precis som förra delen är detta ett komplement till boken med lite exempel.

## Alert och prompt

I JavaScript finns det två inbyggda funktioner, dvs. någonting som redan är skapat åt oss som vi kan använda oss av - dessa är `alert` och `prompt`. Alert är en popup-ruta med text och prompt är en popup-ruta som ger möjligheten för en användare att skriva i någon text. Koden i detta exempel är det som händer när en användare klickar på knappen. Pröva exemplet och se vad som händer!

**Kod**
{% highlight js linenos %}
// prompt
var name = prompt("Vad heter du?");
// alert
alert("Hej " + name + "!");
{% endhighlight %}

Vad hände nu här?

1. Variabeln `name` tilldelas det värde som du skriver in i popup-rutan - denna skapas av den inbyggda funktionen `prompt`. Vad som står i popup-rutan är det du skriver inom parenteserna efter `prompt`. Detta benämns även som att vi skickar med ett "argument" till funktionen `prompt`, och i detta fallet är argumentet texten "Vad heter du?"
2. Vi kör sedan funktionen `alert` som också genererar en popup-ruta, men utan ett textfält. Som argument skriver vi det som ska stå i popup-rutan, alltså `"Hej " + name + "!"`

`alert` och `prompt` är kanske inte de mest använda funktioner men de är enkla att komma ihåg och att komma igång med. Alert används ofta vid t.ex. varningar eller andra meddelanden - dock så "avbryter" den vad användaren håller på med då de måste klicka OK för att stänga ner den. Samma sak gäller prompt fast i andra avseenden. Kort kan vi säga att det används alternativa lösningar fast med samma ändamål - helt enkelt försöker de hitta mer användbara popup-rutor eller alternativ.

## Objekt

I JavaScript finns det inbyggda objekt som har funktioner och egenskaper kopplade till sig. Exempel på sådana objekt är `String` (strängar, dvs. text), `Date`, `Array` och `Math`. Det finns fler, men det är inte så relevanta i nuläget. Genom att använda dessa objekt och med tillhörande egenskaper och funktioner så kan vi underlätta och utveckla våra programmeringsfärdigheter. För att använda en funktion eller egenskaper skriver vi `objektetsnamn.funktion()` och `objektetsnamn.egenskap` (notera att andra innehåller inga parenteser). Alltså objektet följt av en punkt (punktnotation) av den funktion eller egenskap vi vill använda. Nedan visas exempel på hur vi kan använda metoderna och egenskaperna på en sträng.

**Kod**
{% highlight js linenos %}
// Skapar en sträng och sparar den i variabeln "txt"
var txt = "Detta är TestSträng!";

// Skriver ut strängen "txt"
document.writeln(txt);

// Skriver ut strängen med versaler
document.writeln(txt.toUpperCase());

// Sparar stränger med versaler i variabeln:
// upperCaseTxt
// Och skriver sedan ut upperCaseTxt
upperCaseTxt = txt.toUpperCase();
document.writeln(upperCaseTxt);

// Skriver ut strängen med gemener
document.writeln(txt.toLowerCase());

// Skriver ut strängens längd (antal tecken)
document.writeln(txt.length);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Detta är TestSträng!
DETTA ÄR TESTSTRÄNG!
DETTA ÄR TESTSTRÄNG!
detta är teststräng!
20
{% endhighlight %}

[Här finner ni fler funktioner och egenskaper](http://www.w3schools.com/jsref/jsref_obj_string.asp) som gäller för `String` (text).

Nedan finner ytterligare exempel fast med det inbyggda objektet `Date` (som används för datum).

**Kod**
{% highlight js linenos %}
// Skapar objektet date
// och sparar det i variabeln "date
var date = new Date();

// Skriver ut objektet Date()
document.writeln(date);

// Skriver aktuellt år
document.writeln("År: " + date.getFullYear());

// Skriver aktuell månad
document.writeln("Månad: " + (date.getMonth()+1));

// Skriver aktuell dag
document.writeln("Dag: " + +date.getDate());

// Skriver aktuell timme 
document.writeln("Timme: " + date.getHours());
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Mon Jan 18 2016 11:16:18 GMT+0100 (CET)
År: 2016
Månad: 1
Dag: 18
Timme: 11
{% endhighlight %}

I ovanstående exempel ser ni hur vi kan använda oss av `Date` för att hämta information så som dagens datum, månad, dag, osv. Lägg även märket till att funktionen `getMonth` ger oss månaden som en siffra (0 - 11), dvs. vi måste därför lägga till `1` för att få den aktuella månaden (om vi räknar från 1 - 12). [Här finner ni ytterligare dokumentation](http://www.w3schools.com/jsref/jsref_obj_date.asp) om `Date`.

Det sista objektet vi ska ta en titt på är `Math` och används för matematiska operationer. Detta kan vara att avrunda, generera ett slumpat tal, osv. Nedan finner ni några exempel på hur `Math` fungerar:

**Kod**
{% highlight js linenos %}
// Skriver ut ett sluptal mellan 0-1
document.writeln(Math.random());

// Skriver ut ett slumptal mellan 0 - 9 och avrundar neråt
document.writeln(Math.floor(Math.random() * 10));

// Skriver ut ett slumptal mellan 0 - 99 och avrundar neråt
document.writeln(Math.floor(Math.random() * 100));
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
0.28792379214428365
2
62
{% endhighlight %}

[Här hittar ni mer dokumentation](http://www.w3schools.com/jsref/jsref_obj_math.asp) om objektet `Math`.

## Loopar


En loop, eller flera loopar, är ett sätt för oss att skriva mindre kod. Loopar används när vi vill att någon form av upprepning av en kodsnutt ska ske, t.ex att skriva ut de tio första talen (1 - 10), istället för att då använda oss av `document.writeln` tio gånger kan vi bestämma att vår loop "går igenom" de tio första siffrorna och använder sig av `document.writeln` för att skriva ut respektive siffra.

I JavaScript finns det tre olika sorters loopar:

1. `for`
2. `while`
3. `do-while`

Kort beskrivet så utför dessa tre samma sak men på en aning olika vis med olika ända mål.

### For-loop

En `for`-loop fungerar på så sätt att vi anger hur länge, eller hur många gånger, vi vill att någon kodsnutt ska upprepas. Detta sker genom att vi anger ett **startvärde**, ett **villkor** (dvs. när loopen ska sluta), och vad vi vill göra **efter** varje omgång (alt. iteration). Nedan visas hur detta struktureras:

**Kod**
{% highlight js linenos %}
for (/* startvärde */; /* villkor */; /* vad vi gör efter varje iteration */) {
    // Den kodsnutt vi vill ska ske efter varje varv/omgång av loopen
}
{% endhighlight %}

Vi ska nu skriva ut "Hej!" 10 gånger. I detta fall är vårt startvärde, variabeln "i" som har värdet 0, vårt villkor är att loopen ska hålla på så länge variabeln "i" är mindre än 10, samt att för varje gång loopen har gått ett varv (alltså uppdateringsvärde) ökar värdet för variabel "i" med 1.

För att demonstrera hur det fungerar kan vi tänka oss att vi vill skriva ut ordet "Hej!" tio gånger. Vad vi kommer göra är att vi skapar en variabel med värdet 0, `var i = 0` - denna agerar startvärde. Därefter kommer vi bestämma att vårt villkor, i vårt fall blir detta att "så länge `i` är mindre än 10 så ska vår loop köras" - detta kan skrivas som `i < 10`. Avslutningsvis måste vi bestämma vad som sker efter varje varv av vår loop - i vårt fall bestämmer vi att `i` ska öka med `1` så att vårt villkor "om `i` är mindre 10" tillslut inte stämmer - då kommer loopen att sluta. För att öka en variabel med siffran `1` kan vi skriva variabelns namn följt av `++` (detta är det samma som `i = i + 1`, dvs. att värdet för `i` är det nuvarande värdet ökat med 1).

**Kod**
{% highlight js linenos %}
// Observera våra tre delar:
// startvärde, villkor, och vad vi vill göra efter varje varv
for (var i = 0; i < 10; i++) {
    // Den kodsnutt vi vill ska upprepa sig efter varje varv
    document.writeln("Hej!");
}
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Hej!
Hej!
Hej!
Hej!
Hej!
Hej!
Hej!
Hej!
Hej!
Hej!
{% endhighlight %}

Det fungerade som det skulle och "Hej!" skrevs ut tio gånger. Om vi tittar på vår variabel `i` och hur denna ökar, dvs. med `i++`, så innebar detta att `i` först blir 1 (eftersom den börja på 0) sen 2, sen 3, osv. Tills den blir 10 och då kommer villkoret `i < 10` inte stämma, 10 är inte mindre än 10 (`i` var ju 10 då). För att kontrollera detta kan vi testa att bara skriva ut `i` istället.

**Kod**
{% highlight js linenos %}
for (var i = 0; i < 10; i++) {
    document.writeln(i);
}
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
0
1
2
3
4
5
6
7
8
9
{% endhighlight %}

Nu kan vi enkelt utläsa att `i` ökar med varje varv i vår loop med 1. Vad är det för anledning att börja på 0 i detta fallet då? Finns egentligen ingen bättre anledning än att det är vad som brukas göras - det är enkelt att komma ihåg - du kan ju prova att börja på 37 och sluta på 46, blir samma sak i slutändan. Pröva dig fram och se vad som händer!

### While-loop

Precis som med en `for`-loop så används `while`-loopen för att repetera en kodsnutt ett antal gånger. Det som skiljer sig mellan dessa loopar är att vi inte bestämmer hur många gånger den ska köras. Istället har vi endast ett villkor som styr när loopen ska sluta. Detta innebär bla. att det finns risk för att den aldrig slutar (och därmed kommer din webbläsare att krasha!) vilket innebär att vi måste vara nogranna. Vi kan dock åstadkomma samma sak som en `for`-loop om vi vill. Först presenteras strukturen för hur en `while`-loop är uppbyggd:

**Kod**
{% highlight js linenos %}
while (/* villkor */) {
    // Den kodsnutt vi vill ska upprepas
}
{% endhighlight %}

Så länge villkoret stämmer (är sant) så kommer denna loopen att fortsätta att köras. Vi kan ta samma exempel som vi gjorde med vår `for`-loop för enkelhetens skull:

**Kod**
{% highlight js linenos %}
// Startvärde
var i = 0;
// Villkor
while (i < 10) {
    // Den kodsnutt vi ville upprepa
    document.writeln(i);
    // Vad vi gör efter varje varv
    i++;
}
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
0
1
2
3
4
5
6
7
8
9
{% endhighlight %}

Som ni kanske noterar krävs det mer kod för en `while`-loop för att i detta exempel åstadkomma samma sak, och anledningen till detta är att en `while`-loop endast utgår från ett villkor. Därmed behöver vi skapa en variabel själva samt hantera dess värde inuti loopen. För att pröva ett annat exempel kan ni pröva exemplet nedan - som gör att en popup-ruta kommer visas tills dess att användaren skrivit in rätt ord ("Hund"):

**Kod**
{% highlight js linenos %}
// Vi kan faktiskt skapa en "tom" variabel
var animal;

while (animal != "Hund") {
    animal = prompt("Vilket är världens bästa djur?");
}
{% endhighlight %}

Vad som sker här är att vi börjar med att skapa en "tom" variabel, `animal`, och sedan använder vi oss av denna i villkoret. Villkoret kontrollerar om denna variabel innehåller ordet "Hund", om så inte är fallet så fortsätter vår loop. Vår loop använder sig av `prompt` för att visa en popup-ruta för användaren där denne kan fylla i text. Observera att `!=` betyder "inte lika med", mer om detta senare. Pröva exemplet på egen hand!

### Do while-loop

Den sista loopen är "do-while" och fungerar på samma sätt som en "while" loop med en skillnad: den kommer alltid att köra din kodsnutt minst 1 gång - en while loop kan trots allt ha "otur" och aldrig köras. Nedan ser ni ett mindre exempel på hur denna fungerar:

**Kod**
{% highlight js linenos %}
var i = 0;

// Observera att villkoret placeras "efter" loopen
do {
    document.writeln(i);
    i++;
} while (i < 10);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
0
1
2
3
4
5
6
7
8
9
{% endhighlight %}

**Vilken loop ska jag då använda mig av?**

När det gäller att välja "rätt" loop är en tumregel följande: använd dig av en `for`-loop när du vet hur många gånger din loop behöver köras, annars kan du använda dig av en `while`-loop.

## Logik

För att förstå och kunna använda sig av programmering är det viktigt att känna till och ha koll på grundläggande logik. Detta handlar om jämförelser i form av att vi kontrollera någonting, det kan även handla om att vi gör någon beräkning, osv. Dessa kallas även för operatorer och nedan presenteras en lista av de vanligaste:

#### Operatorer

* `=` - tilldelar ett värde
* `==` - lika med
* `===` - like med och samma datatyp
* `!=` - inte lika med
* `&&` - och
* `||` - eller
* `<` - mindre än
* `>` - större än
* `<=` - mindre än eller lika med
* `>=` - större än eller lika med
* `+` - addition
* `-` - subtraktion
* `/` - division
* `*` - multiplikation
* `++` - öka med siffran `1`

### If-satser

Något som är väldigt användbart och effektivt inom programmering är if-satser. Översatt till svenska blir det om-satser, vilka innebär att man kontrollerar ett villkor och beroende på utfallet så gör man olika saker. Syntaxen för if-satser är:

Något som är väldigt vanligt inom programmering är att vi ibland vill göra någon form av kontroll, kanske vill vi kontrollera om en användare fyllde i en korrekt email, eller att summan av två variabler blir ett speciellt värde, osv. För detta använder vi något som kallas för if-satser. Vad detta innebär att vi kan ge en if-sats ett villkor och beroende på detta gör vi det ena eller det andra. Kodmässigt ser strukturen ut såhär:

**Kod**
{% highlight js linenos %}
if (/* Ditt villkor */) {
    // Om villkoret stämmer körs denna delen
} else {
    // Om villkoret inte stämmer körs denna delen istället
}
{% endhighlight %}

För att göra ett mindre exempel kan vi tänka oss att vi vill kontrollera om 5 är större än 4, vilket är sant (dvs. villkoret stämmer):

**Kod**
{% highlight js %}
if (5 > 4) {
    // Denna delen kommer att köras
    document.writeln("5 är större än 4!");
} else {
    document.writeln("5 är inte större än 4!");
}
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
5 är större än 4!
{% endhighlight %}

I exemplet ovan ser vi att eftersom vårt villkor stämmer så körs första delen av vår if-sats och vi får utskriften "5 är större än 4!". För att ta ytterligare ett exempel (som ni får pröva själva) så kan vi utgå från att en användare måste skriva in en siffra och om denna är större än 0 så blir utskriften "talet är positivt!" annars "talet är negativt!".

**Kod**
{% highlight js linenos %}
var number = prompt("Skriv in en valfritt tal");

if (number > 0) {
    document.writeln("talet är positivt!");
} else {
    document.writeln("talet är negativt!");
}
{% endhighlight %}

Genom att kombinera operatorer (som vi gör jämförelser) med if-satser så kan vi få en intressant struktur på vår kod/program - vi kan beroende på olika faktorer eller input av en användare göra olika saker - här har vi grunden för ett dynamiskt program. Saker som vi kan tänka på i det senaste exemplet är att i ett verkligt senario hade vi kanske behövt hantera situationer där användaren skriver in text istället för siffror osv.

### If-else-satser

Vad gör vi om vi t.ex skulle vilja göra flera jämförelser och ha flera olika utskrifter beroende på dessa? Vi hade kunnat ha flera if-satser, dock är detta såpass vanligt att vi har möjlighet att "gruppera" våra if-satser som hör till samma sak så att säga. Detta görs med if-else-satser. Dessa fungerar på samma sätt som en if-sats men vi kan lägga till flera villkor, så här ser strukturen ut:

**Kod**
{% highlight js linenos %}
if (/* Villkor 1. */) {

} else if (/* Villkor 2. */) {

} else if (/* Villkor 3. */) {

} else {

}
{% endhighlight %}

Vi har möjlighet att fortsätta med hur många if-else-satser vi vill. I exemplet tidigare där vi bad en användare skriva in en siffra så fanns det ett problem - vad händer om användaren skriver in siffran `0`, detta är ju varken positivt eller negativt? Då kan vi använda oss av en if-else-sats:

**Kod**
{% highlight js %}
var number = prompt("Skriv in en valfritt tal");

if (number > 0) {
    document.writeln("talet är positivt!");
} else if (number < 0) {
    document.writeln("talet är negativt!");
} else {
    document.writeln("talet du skrev in är varken större än eller mindre än 0");
}
{% endhighlight %}

Genom att lägga till en if-else-sats kan vi nu kontrollera ytterligare ett användarfall och därmed göra vårt program mer användbart. Detta är ingen ovanlighet och det rekommenderas att kontrollera så mycket ni kan för att göra ert program mer användbart.

## Övningar

Nedan presenteras en lista över lite övningar som rekommenderas att ni gör för att öva!

1. Gör en loop som går från 0 till 100, och endast skriver ut de jämna talen. Utskriften ska ske på en lång rad med kommatecken mellan talen
2. Gör en loop som går från 10 till 79, där du efter varje tiotal börjar på en ny rad. Även här ska talen separeras med ett kommatecken
3. Gör en if-sats som kontrollerar om `"10"` är samma som `10` (notera citationstecknen). Gör två versioner, en med `==` och en med `===`, när du kontrollerar. Om det är samma (sant) så skriv ut "Det är sant", annars skriv ut "Det är falskt!"
4. Gör ett frågespel med minst två frågor (använd funktionen `prompt` för att skriva in svar), som räknar det totala antalet gångar ni svarat fel
5. Komplettera det sista exemplet ovan med att testa om det ni skriver in är tal, samt att ni skriver in något över huvud taget
6. I en loop som går 10 varv, slumpa fram ett tal som är mellan 0 och 19. Kontrollera sedan om talet är över, under eller lika med 10. Utskriften ska vara antingen "Talet x är över 10", "Talet x är under 10" eller "Talet x är 10". Där x är talet du slumpar fram

