// server.js
const express = require('express');
const winston = require('winston');

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

// Route voor de homepage
app.get('/', (req, res) => {
    logger.info('Request received at /');
    res.send('Hello, world!');
});

// Route voor de "About" pagina
app.get('/about', (req, res) => {
    logger.info('Request received at /about');
    res.send('About Page');
});

// Start de server
app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});
