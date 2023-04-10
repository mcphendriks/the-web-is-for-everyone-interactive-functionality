> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
Ontwerp en bouw voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De website is gebouw volgens progressive enhancement(coding) strategy met de technologie: HTML met behulp van formulieren en NodeJS, voor het server-side afhandelen van het posten van data en CSS voor de styling is JS voor de interactie. Om vervolgens de gekozen backlog user te voldoen:   Als buurtbewoner wil ik een stekje kunnen toevoegen met behulp van een formulier.

<img width="1000" alt="Screenshot 2023-04-09 at 17 40 58" src="https://user-images.githubusercontent.com/106346778/230782596-5efb9144-12df-474f-8f60-ec5188d0790c.png">

<img width="300" alt="Screenshot 2023-04-09 at 17 42 03" src="https://user-images.githubusercontent.com/106346778/230782602-f086f27a-f416-4b8f-9823-38203f3ca881.png"><img width="300" alt="Screenshot 2023-04-09 at 17 42 17" src="https://user-images.githubusercontent.com/106346778/230782653-e5c271bf-c23f-4131-9297-d00044950c11.png">

## Gebruik
<!--De gebruiker kan een afbeelding van een plantje toevoegen met behulp van een formulier. -->

## Kenmerken

Progressive Enhancement is een _code strategy_ waarbij de website eerst wordt gebouwd met basisfunctionaliteit HTML(client-side) get & post methodes (server-side) die werkt op alle apparaten en browsers. Daarna worden er stapsgewijs geavanceerdere( CSS en JS-interacties) functionaliteiten toegevoegd


<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

**HTML Structuur:**

Dit is een HTML-formulier met velden voor het uploaden van een afbeelding en het invoeren van informatie over een plant, de volgende waardes worden uit de API gehaald: voeding, giftigheid, verpotfrequentie, land van herkomst en beschrijving. Het formulier heeft een "Plant doneren" knop en een link om terug te gaan naar de lijst met planten.

```
 <form action="/" method="post">
        <fieldset class="drop-zone" enctype="multipart/form-data">
            <input class="input-file" type="file" name="bestanden" id="file" accept=".jpeg,.jpg,.png">
            <label for="file" class="drop-zone-label box__dragndrop">
                <span>Selecteer je afbeelding</span>
            </label>
            <p>Sleep bestanden hierheen of klik om bestanden te selecteren</p>
        </fieldset>


        <fieldset class="data-zone">
            <legend>Gegevens planten</legend>

            <label for="naam">title:</label><span>*Verplicht</span>
            <input type="text" name="naam" id="name" placeholder="Hoe heet jouw stekje?" value="<% locals.naam ?? '' %>"
                required>

            <label for="voeding">Voeding:</label>
            <input type="text" name="voeding" id="voeding" placeholder="Heeft jouw stekje veel of weinig water nodig?"
                value="<% locals.voeding ?? '' %>">

            <label for="giftig">Giftig:</label>
            <input type="text" name="giftig" id="giftig" placeholder="Laat ons weten of je plantje giftig is"
                value="<% locals.giftig ?? '' %>">

            <label for="verpotten">Verpotten</label>
            <input type="text" name="verpotten" id="verpotten" placeholder="Hoevaak moet jouw stekje verpot worden?"
                value="<% locals.verpotten ?? '' %>">

            <label for="country" placeholder="..." value="<% locals.landvanherkomst ?? '' %>">Land van herkomst</label>
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>

            <label for="discripe">Omschrijving:</label>
            <textarea type="text" placeholder="Vertel meer over je stekje"></textarea>
            </div>
        </fieldset>
        <button type="submit">Plant doneren</button>
        <a href="/">Terug naar de stekjes</a>
    </form>
```

**Sever-side JS**  (CORE FUNCTIONALITEITEN AFHANDELN FORMULIER)

///
// // haalt planten gegevens(data) op uit API
plantRoute.get("/", (request, response) => {
  response.render("plantNew");
});

// // Toon het formulier om een nieuw plantje te doneren
plantRoute.get("/aanmelden", (request, response) => {
  response.render("plantNew.ejs");
});

// Handel het versturen van het formulier af
// Roep de API aan met de post methode en post in de API, die vervolgens wordt getoond in de index.ejs waar de get plaats vindt.
plantRoute.post("/", (request, response) => {
  const baseUrl = `${process.env.API_URL}/stekjes`;
  postJson(baseUrl, request.body).then((data) => {
    if (data.success) {
      response.redirect("/"); // plant meegeven, message meegeven
      // Toon opnieuw het formulier (met waarden) als het niet gelukt is
    } else {
      response.render("plantNew.ejs", { error: data.error }); // Fail, message meegeven
    }
    //   //  De waarden uit het formulier (niet de API)
    console.log(JSON.stringify(request.body));
  });
});

///

**Client-side JS**

Deze code is client-side JS die een klikfunctie toevoegt aan een mobile hamburger menu en wanneer erop wordt geklikt, worden de link vertical onder elkaar om de mobiele navigatie te activeren/ deactiveren. 

```
// MOBILE NAVIGATION TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});
```




## Installatie
```
1. Installeer de nieuwste Node.js versie. 
2. Clone de repository 
3. Open de terminal
4. Voer de commando npm install uit
5. Vervolgens voer de commando npm star uit 
6. De applicatie wordt gehost op http://localhost:8080/
```

## Bronnen
* [Wat is een REST API nou echt: het basisidee](https://blog.wearefrank.nl/wat-is-een-rest-api-nou-echt-het-basisidee)
* [principes](https://www.w3.org/DesignIssues/Principles.html) 
* [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). 
* [JavaScript Fetch API Ultimate Guide](https://blog.webdevsimplified.com/2022-01/js-fetch-api/)
* [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/)
* [The power of progressive enhancement](https://archive.hankchizljaw.com/wrote/the-power-of-progressive-enhancement/)
* [Progressive Enhancement and Data Visualizations](https://css-tricks.com/progressive-enhancement-data-visualizations/)
* [Wireframing User Flow with Wireflows](https://balsamiq.com/learn/articles/wireflows/)
* [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/)
* [The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)
* [The Form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
* [Browser stack:](https://www.browserstack.com/accounts/subscriptions?product=live&_gl=1*1gp7tmv*_ga*NDczNDU2NTY4LjE2ODAwMzE4MzA.*_ga_BBS5LEDVRG*MTY4MTA0MDUyNi4xLjEuMTY4MTA0MDcyNy41NS4wLjA)
* [caniuse.com](https://caniuse.com)
* [HTML validator(https://validator.w3.org/)



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
