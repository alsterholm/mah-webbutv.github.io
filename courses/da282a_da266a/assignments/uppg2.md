---
title: Inlämningsuppgift 2
code: da282a_da266a
---

# Inlämningsuppgift 2

Betyg: U/G

## Syfte

Syftet med den andra inlämningen är att fortsätta göra sig bekant med både programmeringsmiljön och ännu mer med självaste programmeringen. I denna inlämningen kommer ni att arbeta med koncept som är viktiga för att kunna struktuera både hela programmet men även den data (innehåll) ni arbetar med. Detta är bland annat loopar, listor och dictionaries. Utöver detta så blir det en fortsatt repetition av det som tidigare introducerats i den första inlämningen, dvs. variabler och funktioner.

Inför denna uppgiften rekommenderas det starkt att läsa kapitel 7, 8, 10 och 11 i boken Think Python (gör gärna övningarna också).

Det rekommenderas även starkt att ta en titt på följande källor:

* [Python's range function explained](http://pythoncentral.io/pythons-range-function-explained/)
* [Python Dictionaries](https://jeffknupp.com/blog/2015/08/30/python-dictionaries/)

## Uppgiften

Denna uppgift är indelad i mindre deluppgifter, det rekommenderas att försöka hålla sig till den ordning som presenteras (då svårighetsgraden ökar med varje). Uppgifterna kan lösas på många olika vis, det finns alltså inte alltid **ett** korrekt svar utan ibland kan det finns ett flertal. När ni söker information via webben efter lösningar eller hjälp på vägen så rekommenderas det starkt att oavsett vad ni hittar - försök att förstå hur det fungerar - experimentera, och utforska gärna koden med Pythontolken.

**Tips:** försök att hålla er Pythonkod på Engelska, delvis för att det är en bra övning språkmässigt men ni slipper även eventuella problem som kan uppstå med bokstäverna ÅÄÖ - om ni inte stöter på dessa problem kan ni bortse från detta tips.

**Glöm inte att läsa igenom kravspecifikation innan ni börjar, så ni inte missar någonting eller får komplettera på grund av slarvfel.** 

Observera att i Pythonversion `3.x` sker utskrifter med `print(1)`, i Pythonversion `2.x` sker utskrifter med `print 1` - notera avsaknaden av parenteser
{: .info}

### Uppgift 1

Skapa funktionen `printNumbers` som tar emot en siffra och skriver ut siffrorna `1` till den siffran, t.ex. hade anropet `printNumbers(5)` skrivit ut siffrorna `1` till `5`, på varsin rad.

### Uppgift 2

Skapa funktionen `fooBar` som tar emot en siffra och skriver ut siffrorna `1` till den siffran, **dock** med följande krav:

* om siffran är delbar med `3` ska ni istället skriva ut `Foo`
* om siffran är delbar med `5` ska ni istället skriva ut `Bar`
* om siffran är delbar med `3` **och** `5` ska ni istället skriva ut `FooBar`
* övriga siffror skriver ni bara ut utan modifikation

Tänk på att ni kommer behöva använda er av en lagom lång if-elif-else-sats för att kontrollera samtliga kraven, samt i rätt ordning. För att kontrollera att någonting är delbart med t.ex. `3` kan ni använda er av modulusoperatorn `%`. Denna fungerar på följande vis:

``` py
number = 3

if number % 3 == 0:
    print("divisible by 3!")
```

Nedan finner ni även en exempelutskrift på de 15 första talen, dvs. om vi anropat vår funktion på följande vis `fooBar(15)`.

``` bash
1
2
Foo
4
Bar
Foo
7
8
Foo
Bar
11
Foo
13
14
FooBar
```

### Uppgift 3

Skapa funktionen `calculate_average` som tar emot en lista och returnerar medelvärdet för siffrorna i listan. Ta en titt på exemplet nedan för hur denna kan användas.

``` py
# List of numbers
numbers = [2, 4, 6, 8]
# Calculate the average
average = calculate_average(numbers)
# Print the result
print(average) # => 5
```

### Uppgift 4

Skapa funktionen `filter_names_by_length` som tar emot en lista av strängar (namn) och en siffra som representerar den minsta längd ett namn måste ha. Funktionen ska sedan returnera en ny lista med namnen som är längre än denna siffra. Ta en titt på exemplet nedan för att se hur denna kan användas.

``` py
# List of names
names = ["Sherlock", "John", "Eliza", "Joe", "Watson"]

# All names that have more then 4 characters
names_above_4 = filter_names_by_length(names, 4)
print(names_above_4) # => ["Sherlock", "Eliza", "Watson"]

# All names that have more then 6 characters
names_above_6 = filter_names_by_length(names, 6)
print(names_above_6) # => ["Sherlock"]
```

### Uppgift 5

Färdigställ koden nedan så att `print`-anropen fungerar utan att generera felmeddelande, notera kommentarerna innan varje rad som beskriver vilken **typ** värdet för respektive nyckel (eng. key) ska ha.

``` py
# Dictionary
myself = {}

# Firstname - String
print(myself["firstname"])
# eg. => "Sherlock"

# Lastname - String
print(myself["lastname"])
# eg. => "Holmes"

# Age - Integer
print(myself["age"])
# eg. => 35

# Movies - List
print(myself["top_3_movies"])
# eg. => ["Seven", "Gone Girl", "The Prestige"]
```

### Uppgift 6

Skapa funktionen `printPerson` som tar emot en dictionary, som innehåller samma nycklar från Uppgift 5, och skriver ut det i formatet som presenteras i kodexemplet nedan.

``` py
person = {
    "firstname": "Sherlock",
    "lastname": "Holmes",
    "age": 35,
    "top_3_movies": ["Seven", "Gone Girl", "The Prestige"]
}

printPerson(person)
# => "Sherlock Holmes (35), Top Movies: Seven, Gone Girl, The Prestige."
```

Tips: för att sammanställa filmerna till en sträng kan ni söka upp sträng-metoden `.join()`.

### Uppgift 7

Skapa funktionen `createPerson` som tar emot 4 argument: `firstname`, `lastname`, `age` och `top_3_movies`. Funktionen ska returnera en dictionary innehållande detta (ni kan utgå från samma struktur som i Uppgift 6). Ta en titt på exemplet nedan för att se hur det kan se ut.

Ni **ska** kunna använda funktionen från Uppgift 6 i denna uppgiften.

``` py
# Create a new dictionary from the arguments
sherlock = createPerson("Sherlock", "Holmes", 35, ["Seven", "Gone Girl", "The Prestige"])

printPerson(sherlock)
# => "Sherlock Holmes (35), Top Movies: Seven, Gone Girl, The Prestige."
```

## Kravspecifikation

* Placera alla uppgifter i en och samma Pythonfil med namnet `assignment_2.py`
* Markera samtliga uppgifter med en kommentar innehållande uppgiftsnummret, dvs. `# Uppgift 1`
* Använd sunft förnuft och dokumentera er Pythonkod med kommentarer där det kan anses vara lämpligt, t.ex. beskrivning av hur en funktion fungerar och ska användas
* Er Pythonkod ska fungera, dvs. den får inte generera något felmeddelande
* Er Pythonkod ska ha logiska namn vad gäller variabler och funktioner, dvs. inte `a = 10` eller `def x():`
* Kontrollera att er Pythonkod inte innehåller kodexempel från uppgiftsbeskrivning eller gammla kommentarer

## Inlämning

**Glöm inte kontrollera att ni skickat med svar på alla uppgifter och att ni följt kravspecifikationen.**

När du är färdig med din uppgift ska du ladda upp denna som en `.zip`-fil innehållande alla dina filer på It's Learning. Döp denna enligt formatet `inl2_lisa_a.zip`.

Lycka till!
