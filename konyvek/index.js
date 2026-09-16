const express = require("express");
const app = express();
// http://localhost:3030
const PORT = 3030;

//importálás!!!
const {
    getKonyvek,
    getKonyvById
} = require("./services/konyvekservices")

// ez kell ahhoz, hogy request body-t tudjak küldeni
app.use(express.json());

app.get("/", (req, res) => {
    // fontos a státuszkód megadása
    res.status(200).json({info: "Könyvek backend alkalmazás"})
});

//routes
app.get("/konyvek", getKonyvek);
// fontos a paramsnál is az legyen ami a kettőspont után
app.get("/konyvek/:id",getKonyvById);

// ez indítja az appot
app.listen(PORT, () => {
    //console.log("Szerver elindult a " + PORT + "-on")
    // AltGr +7 = `
    console.log(`Szerver elindult a  ${PORT}-on`);
});