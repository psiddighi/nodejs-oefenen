const express = require('express');
const winston = require('winston');

// Zorg ervoor dat je het juiste pad opgeeft naar de router
const boekenRouter = require('./boekenwinkel/routes/boeken'); // Correct pad naar boeken.js
const path = require('path');


const app = express();
const port = 3000;

// Configureer de logger met Winston
const logger = winston.createLogger({
  level: 'info',  // Definieer logniveau
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(), // Gebruik een simpele logstijl
    }),
  ],
});

// Gebruik Winston om de server te loggen
logger.info('Server starting...');

// Stel EJS in als de view engine
app.set('view engine', 'ejs');

// Stel het pad naar de views folder in (maak een "views" folder aan in je project)
app.set('views', path.join(__dirname, 'views')); // Zorg ervoor dat je een 'views' folder hebt

// Middleware om JSON data te kunnen ontvangen
app.use(express.json());

// Route voor de homepage
app.get('/', (req, res) => {
    logger.info('Request received at /');
    res.render('index', { title: 'Welkom bij de Boekenwinkel' }); // Dynamische titel via EJS
});

// Route voor de "About" pagina
app.get('/about', (req, res) => {
    logger.info('Request received at /about');
    res.render('about', { description: 'Deze website biedt een collectie van boeken.' }); // Dynamische inhoud via EJS
});

// Koppel de boeken router aan /boeken
app.use('/boeken', boekenRouter);  // Zorg ervoor dat deze regel aanwezig is

// Start de server
app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});
