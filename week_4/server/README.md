# Server opzetten met Express JS

1. `npm init -y`
2. Maakt een package.json -> Libraries/Modules + Scripts (`npm run start`)
3. Maakt een node_modules folder -> Toevoegen .gitignore
4. `npm i express`
   1. `npm i` leest de dependencies van mijn package.json en downloadt ze.
5. Hoofdbestand aanmaken: `main.js` of `index.js` of ...
6. Importeren de `express` module in ons bestand -> `require('express')`
   1. Maken een "express-applicatie" door de `express()`-functie op te roepen.
   2. Slaan deze "applicatie" op in een variabele.
   3. Op deze app-variable zijn er methodes. Met deze methodes maken we endpoints.
        - .get('path-van-endpoint', () => {})
        - .post('path-van-endpoint', () => {})
        - .put('path-van-endpoint', () => {})
        - .patch('path-van-endpoint', () => {})
        - .delete('path-van-endpoint', () => {})
   4. Endpoints -> Parameters: Path, Callback
   5. In de callback functie -> altijd een response!
      1. `.send()` voor tekst of HTML
      2. `.json()` voor JSON/JS
7. Server opstarten -> `app.listen()`