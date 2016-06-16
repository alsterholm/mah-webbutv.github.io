---
title: "Övning: React"
code: da281a_da265a
---

# Övning: React

[React](https://facebook.github.io/react/index.html) är ett tredjepartsbibliotek för att arbeta med användargränssnitt, skapat av Facebook. Det är idag ett av de mer populära biblioteken som används för detta ändamål inom industrin.

För att använda sig av detta kräver det att vi har tillgång till biblioteket (dvs. JavaScript-filerna) och har skapat en grund med HTML och koppling mellan alla JavaScript-filer. För att ni ska snabbt komma igång med denna övning/introduktion till React [kan ni klicka här för att ladda ner ett "starter-kit"](zip/react-starter-kit.zip). I denna mapp finner ni `index.html` med allting sammankopplat och klart. Det enda ni behöver göra är att skriva er kod inom `<script type="text/babel">`-taggen.

## JSX

En intressant aspekt med React som måste nämnas direkt är det faktum att när ni skriver kod för detta bibliotek eller söker via webben kommer ni märka att det blandas HTML- och JavaScript-kod i samma fil, vilket kan anses vara väldigt konstigt. Vad detta egentligen innebär är att när vi skriver HTML-kod med detta bibliotek kommer React i bakgrunden att konvertera detta till JavaScript - så det handlar egentligen om att göra det lättare för oss som utvecklare. React kallar detta för "JSX".

För att kort demonstrera det hela kan vi göra ett trivialt exempel med React.

Den kod som demonstreras i denna övning placerar ni i er `<script>`-tagg.

``` js
var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello World!</h1>
        );
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);
```
