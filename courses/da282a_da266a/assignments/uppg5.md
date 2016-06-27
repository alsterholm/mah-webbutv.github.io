---
title: Inlämningsuppgift 5
code: da282a_da266a
---

# Inlämningsuppgift 5

Betyg: U/G

## Syfte

Syftet med den femte inlämningen är att fortsätta arbeta med ramverket Flask och därmed utöka kunskapen inom detta. Inriktningen för just denna uppgiften är att arbeta med data genom att skicka och ta emot. Det dataformat som kommer att användas är JSON. För att skicka data kommer vi att använda oss av formulär.

Inför denna uppgiften rekommenderas det starkt att läsa kapitel 4 och 14 i boken Flask Web Development.

Det rekommenderas även starkt att ta en titt på följande källor:

* [jsonify](http://flask.pocoo.org/docs/0.11/api/#flask.json.jsonify) - skicka JSON med flask
* [Accessing Request Data](http://flask.pocoo.org/docs/0.11/quickstart/#accessing-request-data)
* [What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY) (video)
* [Designing a RESTful API with Python and Flask](http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask)

## Uppgiften

Denna uppgiften går ut på att ni ska arbeta med att skicka och ta emot data - mer specifikt en *persondatabas* (t.ex. över anställda eller dylikt). Den data som skickas ska göra så genom ett formulär, den data en användare kan ta emot ska skickas som JSON. Så det är huvudsakligen två delar till denna uppgiften - skicka och ta emot. Eftersom vi kommer arbeta med data och spara denna i formatet JSON så blir det repetition på filhantering från uppgift 3. Ni finner mer ingående krav under "Innehållskrav".

**Tips:** försök att hålla er Pythonkod på Engelska, delvis för att det är en bra övning språkmässigt men ni slipper även eventuella problem som kan uppstå med bokstäverna ÅÄÖ - om ni inte stöter på dessa problem kan ni bortse från detta tips.

**Glöm inte att läsa igenom kravspecifikation innan ni börjar, så ni inte missar någonting eller får komplettera på grund av slarvfel.** 

### Innehållskrav

Följande `Routes` måste finnas:

* `/` - Startsidan
    * På startsidan ska det finnas ett formulär för att lägga till (spara) en ny person, formuläret ska ha fält för följande värden: förnamn, efternamn, personnummer, email, adress och kommentar (t.ex. att personen arbetar på en viss avdelningen eller dylikt)
* `/done` - Den sida en användare skickas till när de registrerat en ny person, en tack-sida så att säga
    * Det innebär att formuläret ska ha `action="/done"` och i er `Route` för `/done` måste ni då samla in datan från formuläret och spara det i er JSON fil `database.json`
* `/users` - Lista alla personer
    * När en användare besöker `/users` ska de få sitt svar i formatet JSON, dvs. det ska inte visas någon HTML-fil eller dylikt
* `/users/:ssn` - Visa **en** användare baserat på deras personnummer (dvs. *ssn*)
    * När en användare besöker `/users/:ssn` ska det få sitt svar i formatet JSON, dvs. det ska inte visas någon HTML-fil eller dylikt. Samt att det **endast** ska visas information om **en** användare

Slutligen ska ni även ha en så kallad 404-sida, dvs. en sida som visas om en användare besöker en av era sidor som inte finns, t.ex. `/doesntexist`. Tips: [Redirects and Errors](http://flask.pocoo.org/docs/0.11/quickstart/#redirects-and-errors).

För att förtydliga gällande `/users` och `/users/:ssn` kan ni ta en titt på nedanstående exempel.

Tänk att en användare besöker `http://localhost:8080/users` - då bör denna person få någonting i stil med följande i sin webbläsare:

``` json
{
    "users": [
        {
            "firstname": "Sherlock",
            "lastname": "Holmes",
            "ssn": "760407",
            "email": "sherlock@gmail.com",
            "address": "221B Baker Street"
        },
        {
            // etc...
        }
    ]
}
```

Om en användare istället besöker `http://localhost:8080/users/760407` - då bör denna person få någonting i stil med följande i sin webbläsare:

``` json
{
    "user": {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "ssn": "760407",
        "email": "sherlock@gmail.com",
        "address": "221B Baker Street"
    }
}
```

## Kravspecifikation

* Placera alla uppgifter i en och samma Pythonfil med namnet `assignment_5.py`
* Använd sunft förnuft och dokumentera er Pythonkod med kommentarer där det kan anses vara lämpligt, t.ex. beskrivning av hur en funktion fungerar och ska användas
* Er Pythonkod ska fungera, dvs. den får inte generera något felmeddelande
* Er Pythonkod ska ha logiska namn vad gäller variabler och funktioner, dvs. inte `a = 10` eller `def x():`
* Kontrollera att er Pythonkod inte innehåller kodexempel från uppgiftsbeskrivning eller gammla kommentarer

## Inlämning

**Glöm inte kontrollera att ni skickat med svar på alla uppgifter och att ni följt kravspecifikationen.**

När du är färdig med din uppgift ska du ladda upp denna som en `.zip`-fil innehållande alla dina filer på It's Learning. Döp denna enligt formatet `inl5_lisa_a.zip`.

Lycka till!
