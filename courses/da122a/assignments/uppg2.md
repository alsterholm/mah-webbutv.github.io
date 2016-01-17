---
title: Inlämningsuppgift 2
code: da122a
disqus: 1
---

# Inlämningsuppgift 2

Betyg: U/G

## Inledning

Andra inlämningsuppiften går ut på att ni med hjälp av CSS ska ändra utseendet på en sida som helt saknar formgivning genom CSS.

## Uppgift

Ni ska göra sidan i tre olika designer, två förutbestämda och en egen. [Sidan ni ska designa](/courses/da122a/material/inl2_html.html) består av två stycken artiklar från [www.sweclockers.com](www.sweclockers.com) som i sin tur består av rubrik, publiceringstid, ingress, brödtext och en bild. Allt detta ligger i en `<div>` som har `id="articles"`. Nedan presenteras ett utdrag av HTML-koden, för att få en mer detaljerad syn kan ni titta på källkoden av [sidan som ni ska designa](/courses/da122a/material/inl2_html.html):

{% highlight html linenos %}
<!-- ... -->
<body>
    <div id="articles">
        <article>
            <h1>Titel på artikeln</h1>
            <img src="..." alt="..." />
            <p class="published">...</p>
            <p class="introduction">...</p>
            <p>Brödtext</p>
            <p>Brödtext</p>
            <p>Brödtext</p>
        </article>

        <article>
            <h1>Titel på artikeln</h1>
            <img src="..." alt="..." />
            <p class="published">...</p>
            <p class="introduction">...</p>
            <p>Brödtext</p>
            <p>Brödtext</p>
            <p>Brödtext</p>
        </article>
    </div>
</body>
<!-- ... -->
{% endhighlight %}

Det ni ska formge är alltså:

* Id: articles
* Class: published
* Class: introduction
* Element: body
* Element: article
* Element: h1
* Element: img
* Element: p

Nedan ser ni två bilder på hur de förutbestämda designerna ni ska göra ska se ut, efter att ni designat sidan genom CSS.

![CSS exempel 1](/courses/da122a/material/inl2_bild1.png) _Bild 1._

![CSS exempel 2](/courses/da122a/material/inl2_bild2.png) _Bild 2._

Förutom att designa sidan som de två bilderna ovan, ska ni även skapa ett eget utseende för sidan. Var kreativa! Våga testa olika inställningar för att skapa en attraktiv sida.

Bakgrunderbilder till den första designen finns i `.zip` filen som ni hittar längre ner under rubriken **Mall**.

### Tips

Börja med att designa de mest övergripande elementen, dvs. `id="articles"` och `<article>`. På första designen är bredden på `id` articles totalt 840 pixlar och på den andra designen 1040 pixlar. När ni gjort detta kan det vara lämpligt att ta hand om bildens placering så att den hamnar på önskad plats. När den mest övergripande stylingen nu är gjord är det dags att börja med finjusteringarna, så som färg på text/bakgrund, storlek på text m.m.

### Mall

[Klicka ähr för att hämta en mall](/courses/da122a/material/inl2_zip.zip) bestående av tre stycken HTML-dokument med tre stycken CSS-mallar länkade till sig. I `.zip` filen finns även en brakgrundsbild till den första designen.

## Kravspecifikation

Det första kravet är att sida 1 och sida 2 ni lämnar in ska se ut som bilderna ovan. Uppgiften kräver inte att ni t.ex. har rätt antal pixlar vid varje padding/margin osv. utan att den övergripande sidan i stor utsträckning liknar respektive bild ovan.

Ni ska även ha använt er utav följande egenskaper minst en gång i något av era CSS-dokument (självklart får ni använda er utav andra egenskaper också!):

* Bakgrundsfärg (background-color)
* Bakgrundsbild (background-image)
* Textfärg (color)
* Text-justering (text-align)
* Höjd på textrad (line-height)
* Text-stil (font-style)
* Typsnitt (font)
* Marginal (margin)
* Utfyllnad (padding)
* Höjd (height)
* Bredd (width)
* Ram (border)
* Placering av element (float, position eller flexbox)

**Övriga krav**

* Sidorna ska vara centrerade i webbläsarfönstret.
* Bakgrund och bakgrundsbild ska sträcka sig över hela webbläsarfönstret.
* Höjden på sidan ska inte vara fast (i pixlar eller procent), utan ska automatiskt anpassa sig efter höjden på artiklarna.

**Observera** att ni får inte ändra i HTML-koden utan endast i CSS-mallarna.

**Tänk på att:**

* Design 1: Glöm inte att det ska finnas "luft" runt bilderna i artiklarna.
* Design 2: Artiklarna ska vara centrerade, dvs. det ska finnas lika mycket "luft" till vänster om den vänstra artikeln som till höger om den högra.

## Inlämning

*Inlämningsuppgiften är individuell, vilket innebär att samarbete inte är tillåtet.*

När ni är färdiga med alla tre designer ska ni lämna in dessa som en `.zip` fil på It's learning. Dessa ska även vara upplagda på dvwebb och således behöver ni även inkludera länkar till dessa sidorna.

Lycka till!
