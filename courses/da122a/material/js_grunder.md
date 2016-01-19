---
title: JavaScript - Grunder
code: da122a
disqus: 1
---

# JavaScript - Grunder

## Inledning

Om frågor kommer upp, något är otydligt eller du har något annat som du funderar över så använd kommentarsfältet längst ner. Där finns både jag och kursare som hjälper dig.

JavaScript är ett programmeringsspråk som till stor del används för att höja interaktiviteten mellan en webbplats och dess användare. Med JavaScript kan vi göra webbplatser roligare och effektivare då JavaScript till skillnad från andra programmeringsspråk körs direkt i webbläsaren. Fördelen med detta är t.ex. att vi inte behöver ladda om sidan för att ändra, skapa eller ta bort element på en sida. Här kommer en snabb introduktion till JavaScript (och programmering). Introduktionen är exempelbaserad och ett komplement till er kurslitteratur.

## Var skriver vi JavaScript-kod?

JavaScript-kod används ofta tillsammans med HTML. Det bästa är egentligen att separera all JavaScript-kod från HTML-kod och ha de i olika dokument. Men för enkelhetens skull så börjar vi med att skriva det i samma dokument. All JavaScript-kod som vi skriver ska skrivas inom elementet `<script>`.

{% highlight html linenos %}
<!doctype html>
<html>
    <head>
        <title>JavaScript exempel</title>
        <meta charset="utf-8">
    </head>
    <body>
        <script>
            /* Här placerar ni er JavaScript! (obs. detta är en kommentar) */
        </script>
    </body>
</html>
{% endhighlight %}

## Variabler och utskrifter

I programmeringsspråk använder vi något som kallas för variabler. En variabel kan snabbt sammanfattas som en plats att spara information. Det finns många olika metaforer för en variabel bla. att en variabel är en låda där vi kan stoppa ner och spara saker - för att vid ett senare tillfälle hämta och använda oss av sakerna.

## Variabler

I JavaScript så skapar man en variabel genom att skriva `var` följt av namnet på variabeln, t.ex `var firstname`. Ofta vill vi ju också tilldela variabeln något värde (eller för den delen lägga ner någonting i lådan vi precis skapade). För att skapa variabeln "name" och tilldela variabeln namn värdet "Lisa" skriver vi `var name = "Lisa";`. Som ni säkert noterade så skriver vi `=` mellan variabeln och det värde som den ska tilldelas. Detta ska inte likställas med *=* i betydelsen ekvivalent (är samma som), mer om detta senare. Ni kanske även la märket till att "Lisa" skrevs inom citationstecken? Detta för att vi berättar för datorn att "Lisa" är en text-sträng. Det finns olika datatyper varav sträng är en - number och boolean är andra exempel (mer om detta senare).

**Vår första variabel**

{% highlight js linenos %}
var name = "Lisa";
{% endhighlight %}

## Utskrifter

Då har vi skapat vår första variabel (`namn`) och tilldelat den värdet "Lisa". Vad kan vi då göra med denna variabel? Vi kan börja med att bara skriva ut den på sidan. För att skriva ut något på en sida genom JavaScript så använder vi den inbyggda funktionen `document.write("Det man vill skriva ut")`. Exempel nedan:

**Kod**
{% highlight js linenos %}
var name = "Lisa";
document.write(name);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Lisa
{% endhighlight %}

Resultatet av dessa två raderna blir alltså att det på sidan skrivs ut "Lisa". Detta eftersom vi skapar en variabel (`name`) och tilldelar variabeln värdet "Lisa". När vi skriver ut variabeln `name`, så skriver webbläsaren ut det som finns i variabeln name dvs. "Lisa". Vi behöver inte alls döpa variabeln till `name` utan kan döpa den till vad som helst (se nedan) även om det är rekommenderat att döpa den till något förståeligt.

**Kod**
{% highlight js linenos %}
var name = "Lisa";
document.write(name);
var a = "Lisa";
document.write(a);
var hej = "Lisa";
document.write(hej);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Lisa
Lisa
Lisa
{% endhighlight %}

När vi vill skriva ut saker på sidan finns det två olika funktioner - `document.write` och `document.writeln`. Skillnaden på dessa är att den andra ("writeln") har "ln" (eng. Line) på slutet vilket innebär att den automatiskt radbryter efter utskriften. Det gör inte funktionen `document.write`. Exempel nedan:

**Kod**
{% highlight js linenos %}
var name = "Eva";
document.write(name);
document.write(name);
document.write(name);
                
var name = "Eva";
document.writeln(name);
document.writeln(name);
document.writeln(name);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
EvaEvaEVa

Eva
Eva
Eva
{% endhighlight %}

Så vilken utskriftsmetod vi använder oss av beror därför på situationen, om vi vill ha ett radbryt eller inte.

## Att skriva ut flera saker

Om vi skulle vilja skriva ut flera saker samtidigt, dvs. inte bara ett namn - kanske för- och efternamn, osv. Då kan vi fortfarande använda samma metoder sen tidigare men vi kan använda oss av `+` (plus) för att slå ihop flera värden (eller variabler). Exempel nedan:

**Kod**
{% highlight js linenos %}
var greeting = "Hej ";
var name = "Lasse";
document.writeln(greeting + name);
                
var a = "Hej ";
var b = "Lasse";
document.writeln(a + b);

document.writeln("Hej " + "Lasse");
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Hej Lasse

Hej Lasse

Hej Lasse
{% endhighlight %}

Då har vi snabbt tittat på variabler och utskrifter i JavaScript. Om ni har några frågor så tveka inte att fråga!

## Datatyper

De tre vanligaste datatyperna i JavaScript, de som vi kommer jobba mest med, är:

* Sträng (String)
* Heltal (Number, alt. Integer)
* Boolesk variabel (Boolean)

En sträng är någon typ av text så som bokstäver, siffror och specialtecken. Exempel på strängar är de namn vi använt i exemplen ovan, alltså "Lisa", "Eva" och "Lasse". Strängar skrivs alltid inom citationstecken (" "). Detta eftersom vi då berättar för datorn att det vi skriver är en sträng. Vi kan inte göra beräkningar med en sträng, utan en sträng är helt enkelt tecken i följd.

Heltal är siffror. Siffror som vi kan göra beräkningar med. Till skillnad från strängar så skrivs dessa utan citationstecken. T.ex. `var age = 25;`.

Boolesk variabel är en datatyp som kan ha två värden, `true` eller `false`. Precis som heltal så skrivs dessa också utan citationstecken. T.ex. `var married = false;`.

**Kod**
{% highlight js linenos %}
var firstname = "Sherlock"; /* Detta är en sträng */
var age = 33; /* Detta är ett heltal */
var detective = true; /* Detta är ett booleskt värde */

document.writeln(firstname);
document.writeln(age);
document.writeln(detective);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Sherlock
33
true
{% endhighlight %}

När vi ser resultatet ovan så ser användaren inte skillnad på datatyperna. Och just i detta exempel så är skillnaden inte så stor (förutom att det just är olika datatyper). Men om vi t.ex. vill räkna lite så är det viktigt att välja rätt datatyp (heltal) annars så blir uträkningen inte korrekt, se exempel nedan:

**Kod**
{% highlight js linenos %}
var tal1 = "5";
var tal2 = "7";
var summa1 = tal1 + tal2;

document.writeln(summa1);

var tal3 = 5;
var tal4 = 7;
var summa2 = tal3 + tal4;

document.writeln(summa2);
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
57
12
{% endhighlight %}

I exemplet ovan så vill vi addera 5 med 7 (som blir 12). I första exemplet skapar vi variablerna `tal1` och `tal2`. Vi sätter citationstecken runt om och gör då 5 och 7 till strängar. Eftersom att strängar räknas som tecken (och inte siffror) så slår JavaScript ihop strängarna istället för att addera dem. Så `"5" + "7"` blir då `"57"` (precis som i "Hej Lasse" exemplet tidigare). Det var ju inte det resultat som vi önskade. Om vi då istället skriver in 5 och 7 som siffror (dvs. utan citationstecken) så fungerar additionen som vi vill och `5 + 7` blir `12`. Detta är ett exempel på hur viktigt det är att hålla rätt på vilken datatyp som används.

Till skillnad från andra språk kan vi kombinera olika datatyper vid utskrifter i JavaScript. T.ex. kan jag skriva ut en sträng **+** ett heltal. Då slås strängen och siffran ihop (precis som två strängar). Exempel nedan:

**Kod**
{% highlight js linenos %}
/* Variabel age är av datatypen heltal */
var age = 23;
document.writeln("Jag är " + age + " år");
{% endhighlight %}

**I webbläsaren**
{% highlight html %}
Jag är 23 år
{% endhighlight %}

Datatypen boolesk variabel är antingen `true` eller `false` (dvs. sant eller falskt) och används ofta när vi gör tester i JavaScript och returneras sedan (vi kommer att prata mer om returer och användning av denna datatyp senare).

## Kommentarer i JavaScript

Det är alltid bra att kommentera den kod ni skriver, framförallt i början när allt är nytt. Genom att kommentera koden kan vi snabbt få en överblick vad den gör så att vi lättare får förståelse för den. Dessutom är det bra att kommentera koden i fall någon annan skulle behöva använda den vid senare tillfälle (eller rätta den!). Kommentarer skrivs aldrig ut i webbläsaren (bara i källkoden) och är därför till för utvecklarna och betraktarna.

I JavaScript kan vi kommentera på två olika sätt.

1. `// Kommentar här` - Kommentar på **en** rad
2. `/* Kommentar här */` - Kommentar på **flera** rader

Till exempel:

**Kod**
{% highlight js linenos %}
// Detta är en kort kommentar på en rad

/*
 Detta är en längre kommentar
 som sträcker sig över flera
 rader.
*/
{% endhighlight %}

**I webbläsaren**
{% highlight html %}

{% endhighlight %}

## Övningar

Här är några övningar för de intresserade:

1. Spara ditt förnamn i en variabel som heter "firstname" och ditt efternamn i en variabel som heter "lastname". Skriv sedan ut detta på en sida så att resultatet blir:

{% highlight html linenos %}
Mitt namn är förnamn efternamn
{% endhighlight %}

2. Nu ska vi räkna lite datatypen heltal. För att göra det hela lite mer utmanande ska vi sedan skriva ut svaret med både datatypen sträng och tal. Spara först talen 8 och 9 i variabler. Gör sedan en tredje variabel där du räknar ut summan av dessa två tal. När du fått fram svaret ska du skriva ut det såhär:

2. Beräkningar med heltal. För att göra det hela lite mer utmanande ska vi skriva ut svaret med både datatypen sträng och heltal. Spara först talen 8 och 9 i varsin variabel (valfritt namn). Gör sedan en tredje variabel där du räknar ut och sparar summan av dessa två tal. När du fått fram svaret ska du skriva ut det på följande vis:

{% highlight html linenos %}
Resultat: 8 + 9 = 17
{% endhighlight %}

I utskriften ska talen 8, 9 och 17 vara dina variabler som du gjort.

Testa även att kommentera dina övningar så att du får testa på hur det fungerar.
