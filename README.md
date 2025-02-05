Boekenwinkel API met Express.js

Dit project is een eenvoudige Node.js-applicatie met Express.js en de template-engine EJS. Het bevat routes voor een boekenwinkel en maakt gebruik van Winston voor logging.

Installatie

Kloon de repository

git clone <repository-url>
cd <project-directory>

Installeer de benodigde pakketten

npm install

Gebruik

Start de server

npm start

De server draait standaard op http://localhost:3000.

Functionaliteiten

Homepage (/): Weergave van de welkomstpagina met EJS.

Over-pagina (/about): Weergave van een beschrijvende pagina met EJS.

Boeken API (/boeken): Ophalen en toevoegen van boeken via een JSON API.

Logging: Winston wordt gebruikt voor logging van serveractiviteiten.

Routes

Route

Methode

Beschrijving

/

GET

Weergave van de homepage

/about

GET

Weergave van de about-pagina

/boeken

GET

Ophalen van alle boeken

/boeken

POST

Een nieuw boek toevoegen

Vereisten

Node.js

Express.js

Winston

EJS

Mapstructuur

/project-root
│-- /boekenwinkel
│   ├── /routes
│   │   ├── boeken.js
│-- /views
│   ├── index.ejs
│   ├── about.ejs
│-- server.js
│-- package.json
│-- README.md

Template Engine

De applicatie maakt gebruik van EJS als template-engine. De views bevinden zich in de views/ map en worden gerenderd via res.render() in de routes.

Licentie

Dit project is open-source en kan vrij worden gebruikt en aangepast.

