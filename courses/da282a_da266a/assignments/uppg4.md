---
title: Inlämningsuppgift 4
code: da282a_da266a
---

# Inlämningsuppgift 4

Betyg: U/G

## Syfte

Syftet med den fjärde inlämningen är att få en introduktion till webbutveckling med Python i samband med ramverket [Flask](http://flask.pocoo.org/). Flask är ett så kallat micro-ramverk, dvs. det ger en bra bas till att göra många saker men lämnar det upp till utvecklaren att utföra mycket på egen hand, vilket både kan vara positivt och negativt.

Inför denna uppgiften rekommenderas det starkt att läsa kapitel 1, 2 och 3 i boken Flask Web Development.

Det rekommenderas även starkt att ta en titt på följande källor:

* [Flask's egna introduktion](http://flask.pocoo.org/docs/0.11/quickstart/#quickstart)
* [Flask (Full Stack Python)](https://www.fullstackpython.com/flask.html) (samling av länkar till andra resurser)

## Uppgiften

Denna uppgiften går ut på att ni ska skapa en grundläggande men fullt fungerande webbplats, där allt innehåll kommer vara statiskt och utseendet ska styras med CSS. Det innebär att det viktiga med uppgiften är att få allting att fungera med Flask. Den webbplats ni ska skapa kommer ha fyra sidor (Routes) samt en felmeddelande-sida för om en användare besöker en sida som inte finns (sk. 404-sida). Ett tips är att utgå, delvis från boken, men ganska mycket från den introduktion som finns på Flasks egna webbplats (länkad under "Syfte"). När ni söker information via webben så se till att pröva de exempel ni finner och försök att förstå hur allting fungerar. Ni finner kraven på webbplatsen under "Innehållskrav".

**Tips:** försök att hålla er Pythonkod på Engelska, delvis för att det är en bra övning språkmässigt men ni slipper även eventuella problem som kan uppstå med bokstäverna ÅÄÖ - om ni inte stöter på dessa problem kan ni bortse från detta tips.

**Glöm inte att läsa igenom kravspecifikation innan ni börjar, så ni inte missar någonting eller får komplettera på grund av slarvfel.** 

### Innehållskrav

Följande `Routes` måste finnas:

* `/` - Startsidan
    * På startidan för er webbplats ska ni ha en kort introduktion om er själva, eller någon annan person (dvs. inte "Lorem ipsum"), utöver textinnehållet ska det även finnas en bild (valfritt filformat)
* `/contact` - Kontaktsidan
    * Här ska det finnas lite kontaktinformation samt ett kontaktformulär (bara utseendemässigt, det behöver inte fungera)
* `/movies` - Filmsidan
    * Den här sidan ska visa en lista (ul eller ol) av filmer (valfritt vilka) **men** filmerna ska vara sparade som en lista i er Pythonkod och skickas med till er `Route`. Det innebär att ni måste ta reda på hur ni kan använda er av mallarna ([Jinja2](http://jinja.pocoo.org/)) och skicka med data - tips: ta reda på hur [for-loopar fungerar](http://jinja.pocoo.org/docs/dev/templates/)
* `/hello/:name` - Hälsningssidan
    * Den här sidan ska i sin `Route` ta emot ett värde från URL:en, `:name` och sedan skriva ut "Hello :name!". T.ex. om en användare hade besökt `/hello/Sherlock` hade er rubrik innehållit "Hello Sherlock!"

Slutligen ska ni även ha en så kallad 404-sida, dvs. en sida som visas om en användare besöker en av era sidor som inte finns, t.ex. `/doesntexist`. Tips: [Redirects and Errors](http://flask.pocoo.org/docs/0.11/quickstart/#redirects-and-errors).

Tips på läsning:

* [Routing](http://flask.pocoo.org/docs/0.11/quickstart/#routing)
* [Static Files](http://flask.pocoo.org/docs/0.11/quickstart/#static-files)
* [Rendering Templates](http://flask.pocoo.org/docs/0.11/quickstart/#rendering-templates)

Glöm inte läsa övriga krav under kravspecifikationen.

## Kravspecifikation

* Placera alla uppgifter i en och samma Pythonfil med namnet `assignment_4.py`
* Använd sunft förnuft och dokumentera er Pythonkod med kommentarer där det kan anses vara lämpligt, t.ex. beskrivning av hur en funktion fungerar och ska användas
* Er Pythonkod ska fungera, dvs. den får inte generera något felmeddelande
* Er Pythonkod ska ha logiska namn vad gäller variabler och funktioner, dvs. inte `a = 10` eller `def x():`
* Kontrollera att er Pythonkod inte innehåller kodexempel från uppgiftsbeskrivning eller gammla kommentarer

**Specifikt för uppgiften**

* Webbplatsens utseende måste styras med CSS, det behöver inte vara någon avancerad "design" utan bara grundläggande användbarhet - centrerad sida, bra typsnittsstorlek, m.m.
* Webbplatsen måste ha en global navigation så en användare kan navigera mellan alla sidorna

## Inlämning

**Glöm inte kontrollera att ni skickat med svar på alla uppgifter och att ni följt kravspecifikationen.**

När du är färdig med din uppgift ska du ladda upp denna som en `.zip`-fil innehållande alla dina filer på It's Learning. Döp denna enligt formatet `inl4_lisa_a.zip`.

Lycka till!
