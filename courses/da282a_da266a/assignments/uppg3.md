---
title: Inlämningsuppgift 3
code: da282a_da266a
---

# Inlämningsuppgift 3

Betyg: U/G

## Syfte

Syftet med den trejde inlämningen är att lära sig arbeta med användarinput, filer och [JSON](https://en.wikipedia.org/wiki/JSON). Att kombinera dessa är inget ovanligt och respektive koncept kommer ni säkerligen att stöta på enskilt också (utanför inlämningsuppgifterna).

Inför denna uppgiften rekommenderas det starkt att läsa kapitel 13 och 14 i boken Think Python (gör gärna övningarna också).

Det rekommenderas även starkt att ta en titt på följande källor:

* [Reading and Writing Files in Python](http://www.pythonforbeginners.com/files/reading-and-writing-files-in-python)
* [JSON](http://docs.python-guide.org/en/latest/scenarios/json/) (kort)
* [json - JavaScript Object Notation Serializer](https://pymotw.com/2/json/) (längre men mer ingående)

## Uppgiften

Denna uppgift är indelad i tre huvudsakliga delar: 1) input, 2) filhantering och 3) JSON. Där del 3 har samma upplägg som del 2 förutom att vi kommer arbeta med filformatet JSON. Dessa uppgifterna kan lösas på många vis, så länge ni åstadkommer och uppfyller de krav som listas (specifikt för uppgiften) så har ni klarat av uppgiften. I denna uppgiften uppmuntras det att ni experimenterar och utforskar konceptet för att förstå hur det fungerar och för att finna lösningar som ni tycker är bra.

**Tips:** försök att hålla er Pythonkod på Engelska, delvis för att det är en bra övning språkmässigt men ni slipper även eventuella problem som kan uppstå med bokstäverna ÅÄÖ - om ni inte stöter på dessa problem kan ni bortse från detta tips.

**Glöm inte att läsa igenom kravspecifikation innan ni börjar, så ni inte missar någonting eller får komplettera på grund av slarvfel.** 

Observera att i Pythonversion `3.x` sker utskrifter med `print(1)`, i Pythonversion `2.x` sker utskrifter med `print 1` - notera avsaknaden av parenteser
{: .info}

### Del 1: input

I den första delen ska ni experimentera med användarinput, detta genom den inbyggda funktionen `input`. Denna fungerar på följande vis: den sträng ni skickas med kommer visas för användaren, sen kommer användaren ha möjlighet att skriva in en text - trycka enter - och sedan sparas detta innehåll i den variabel ni angett. T.ex. `name = print("What is your name? ")`.

Detta innebär att ni själva bestämmer vad som görs med den input som kommer från en användare. Kanske ni sparar det i en lista, en dictionary eller bara i en variabel - det är upp till er och beror givetvis på vad ni vill åstadkomma. För att experimentera med detta rekommenderas det starkt att ni utför övningen nedan innan ni går vidare med del 2.

#### Övning

Ni ska skapa möjligheten för en användare att fylla i personers för- och efternamn (dvs. lägga till) och kunna lista alla personer (skriva ut). Varje person ska sparas som en dictionary i en lista, dvs. något i stil med `[{"firstname": "Jane", "lastname": "Doe"}, ...]`.

Detta innebär att ni även behöver göra så att användaren får någon form av minimal meny presenterad för sig och ska kontinuerligt kunna lägga till nya personer eller lista alla befintliga personer. Nedan presenteras grunden för en sådan meny.

``` py
# Start a infinite loop
while True:
    # Store user choice in a variable
    choice = input("Choose: (1) Add person, (2) List all\n") # \n = newline

    if choice == "1":
        # Collect firstname + lastname from the user
        # store it in a list as a dictionary
        pass
    elif choice == "2":
        # Go through the list and print everyone
        pass
    else:
        print("Bye!")
        break
```

Om ni skulle endast utgå från exemplet ovan får ni en liten meny där ni kan göra valen 1 och 2, utan att någonting händer, och om ni skriver in något annat som ert val kommer programmet att sluta.

### Del 2: filhantering

I del två så ska ni skapa ett program, likt det i del 1, fast en person ska kunna lägga till fotbollsspelare eller skriva ut alla fotbollsspelare som finns. Varje spelare ska ha ett förnamn, efternamn och vilket land den spelar för. Dessa spelare ska sparas i en fil med namnet `players.txt`. Detta innebär att om en användare lägger till tre spelare, stänger ner programmet och sedan öppnar det igen ska det gå att skriva ut alla dessa spelare. Det vill säga att spelarna finns alltid kvar till skillnad från del 1 där all vårt innehåll försvinner när programmet avslutas.

Formatet på filen `players.txt` ska se ut på följande vis (exemplet har sex stycken spelare):

``` bash
Fraser,Forster,England
Joe,Hart,England
Tom,Heaton,England
Ryan,Bertrand,England
Gary,Cahill,England
Nathaniel,Clyne,England
```

För att ge er en utgångspunkt kan ni ta en titt på stubben (övergripande och ofullständig kod) nedan:

``` py
def add_player(firstname, lastname, country):
    """
    Open the file players.txt
    Add the new player (dont forget to add a newline \n)
    Close the file
    """
    pass

def print_players():
    """
    Open the file players.txt
    Go through each line and print the player
      firstname + lastname + country
    Close the file
    """
    pass

def start():
    """
    Create the while-loop for handling the main menu
    
    User choice 1:
      Fetch firstname, lastname and country with "input"
      call "add_player" with these
    
    User choice 2:
      call "print_players"
    
    Otherwise:
      Close the menu 
    """
    pass

start()
```

**Tips 1:** om ni ska sätta ihop förnamn, efternamn och landet i en sträng i formatet `förnamn,efternamn,land` kan ni använda er av sträng-metoden `.join()`.

**Tips 2:** om ni ska hämta delarna förnamn, efternamn och landet från en rad i filen (sträng) så kan ni ta en titt på [split](https://docs.python.org/3.5/library/stdtypes.html#str.split).

### Del 3: JSON

Tanken med del 3 är samma sak som med del 2, dvs. att kunna lägga till spelare eller att skriva ut alla spelare. Dock med en skillnad - filformatet. Innehållet ska nu istället sparas i filen `players.json` och formatet kommer se ut som det visas nedan. Utöver detta är det samma princip som gäller som i del 2.

Exempel på `players.json` med 5 spelare.

``` py
{
    "players": [
        {"firstname": "Fraser", "lastname": "Forster", "country": "England"},
        {"firstname": "Joe", "lastname": "Hart", "country": "England"},
        {"firstname": "Tom", "lastname": "Heaton", "country": "England"},
        {"firstname": "Ryan", "lastname": "Bertrand", "country": "England"},
        {"firstname": "Gary", "lastname": "Cahill", "country": "England"}
    ]
}
```

Använd er av [JSON-modulen](https://docs.python.org/3.4/library/json.html) för denna del. Glöm inte läsa de länkar som listas under "Syfte".
{: .info}

## Kravspecifikation

* Placera alla uppgifter i en och samma Pythonfil med namnet `assignment_3.py`
* Använd sunft förnuft och dokumentera er Pythonkod med kommentarer där det kan anses vara lämpligt, t.ex. beskrivning av hur en funktion fungerar och ska användas
* Er Pythonkod ska fungera, dvs. den får inte generera något felmeddelande
* Er Pythonkod ska ha logiska namn vad gäller variabler och funktioner, dvs. inte `a = 10` eller `def x():`
* Kontrollera att er Pythonkod inte innehåller kodexempel från uppgiftsbeskrivning eller gammla kommentarer

**Specifikt för uppgiften**

* En användare i del 2 och 3 ska kunna kontinuerligt välja val 1 eller 2, dvs. inte bara kunna göra ett val och sedan stängs programmet av

## Inlämning

**Glöm inte kontrollera att ni skickat med svar på alla uppgifter och att ni följt kravspecifikationen.**

När du är färdig med din uppgift ska du ladda upp denna som en `.zip`-fil innehållande alla dina filer på It's Learning. Döp denna enligt formatet `inl3_lisa_a.zip`.

Lycka till!
