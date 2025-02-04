var express = require('express');
var router = express.Router();

// Dummy boekenlijst
let boeken = [
  { id: 1, titel: "De ontdekking van de hemel", auteur: "Harry Mulisch" },
  { id: 2, titel: "Het gouden ei", auteur: "Tim Krabbé" }
];

// GET: Alle boeken ophalen
router.get('/', function(req, res) {
  res.json(boeken);
});

// POST: Nieuw boek toevoegen
router.post('/', function(req, res) {
  const { titel, auteur } = req.body;
  if (!titel || !auteur) {
    return res.status(400).json({ error: "Titel en auteur zijn verplicht" });
  }
  
  const nieuwBoek = { id: boeken.length + 1, titel, auteur };
  boeken.push(nieuwBoek);
  res.status(201).json(nieuwBoek);
});

module.exports = router;
