const express = require("express");
const { getAllQuotes } = require('./controllers/quotes.controller');

const app = express();

// app.get("/api/quotes", (req, res) => {}))
// app.get("/api/quotes", (req, res) => getAllQuotes(req, res))
// Geen haakjes? Standaard parameters worden automatisch doorgegeven!
app.get("/api/quotes", getAllQuotes)

app.listen(8080, 'localhost', (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log('Server is opgestart en draaiende op http://localhost:8080');
})
