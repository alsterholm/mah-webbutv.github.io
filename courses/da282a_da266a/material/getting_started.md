---
title: "Kom igång"
code: da282a_da266a
---

# Kom igång

Att arbeta med Python är inte direkt det samma som med HTML och CSS. Med HTML och CSS räcker det med en textredigerare och en webbläsare för att komma igång - snabbt och enkelt. Med Python byter vi ut webbläsaren mot en terminal (OS X) / kommandotolk (Windows). En terminal är ett slags program som gör att vi kan komma åt andra program, som inte har ett grafiskt gränssnitt (dvs. att allt i en terminal är textbaserat). Det enda vi egentligen kommer göra med en terminal är att köra/exekvera en Pythonfil - vad innebär detta? Att köra/exekvera en Pythonfil kan ses som att öppna en HTML-fil i en webbläsare - vi får se resultatet av det vi programmerat. I vårat fall kan det t.ex. vara en utskrift så enkel som summan av 1 plus 1 eller att ta emot användarinput som sedan ska sparas i en fil osv. Eftersom Python är ett fullbordat programmeringsspråk är möjligheterna nästan oändliga.

Vad krävs för att komma igång med Python? Först och främst en textredigerare, eftersom ni redan arbetat med HTML och CSS har ni säkert en ni känner er bekväma med - fortsätt såfall med den, om inte så rekommenderar vi [Atom](https://atom.io/). Det andra är givetvis Python, tillskillnad från HTML och CSS måste vi faktiskt installera Python (och någon version av Python) för att vi ska kunna köra våra Pythonfiler (dvs. så datorn vet hur den ska tolka vår kod och utefter vilken Pythonversion den ska göra så). Python är ofta förinstallerat på datorer idag så innan ni går vidare och [laddar ner Python](https://www.python.org/downloads/) (version 3.5.x eller 2.7.x, vi rekommenderar 3.x) så kan ni gå till nästa steg.

Nästa steg är att bekanta sig med sin terminal (eller kommandotolk på Windows) och lära sig lite om denna och lite av dess kommandon.

* [Terminal Tutorial - Part I: Basic Commands and Concepts](https://www.youtube.com/watch?v=-Vl4rpZVA6I) (video) OS X
* [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) OS X
* [Windows Command Prompt in 15 Minutes](http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html) Windows
* [Windows Command Line Tutorial - 1 - Introduction to the Command Prompt](https://www.youtube.com/watch?v=MBBWVgE0ewk) (video) Windows

Ni kan nu pröva att öppna er terminal och skriva in någonting i stil med `python --version` så ser ni vilken Pythonversion ni har, nu rekommenderar vi att ni använder Python 3.x men det fungerar givetvis med Python 2.7.x också - det finns olikheter men dessa löser ni ganska enkelt när ni stöter på dessa genom en mindre googling eller dylikt.

Om ni vill få möjlighet att testa Python räcker det med att ni skriver in `python` i er terminal så kommer ni få fram något som kallas för en Pythontolk - här kan i skriva saker som `1 + 1` och se resultaten direkt (men givetvis mer avancerade saker också).

För att komma igång med det sista steget så är det dags att skapa en Pythonfil, spara denna som `test.py` i en valfri mapp med följande innehåll:

``` py
# A variable (where we store data)
name = "Sherlock Holmes"
print(name)
```

Notera att om ni använder er av Pythonversion 2.7.x så måste ni ändra "print" till `print name` (dvs. utan parenteser)
{: .info}

Nu ska ni öppna er terminal, gå till den plats (mapp) där ni sparat er Pythonfil - detta görs oftast med kommandot `cd` (change-directory). Skriv därefter `python test.py` och se vad ni får för resultat. Om allt gått som de ska bör ni nu ha kommit igång med arbetsprocessen för Python. Vilket är kombinationen av textredigerare och er terminal.
