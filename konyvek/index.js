const express = require("express");
const app = express();
const PORT = 3030;

// ez kell ahhoz, hogy request body-t tudjak küldeni
app.use(express.json());

app.get("/", (req, res) => {
    // fontos a státuszkód megadása
    res.status(200).json({info: "Könyvek backend alkalmazás"})
});

// ez indítja az appot
app.listen(PORT, () => {
    //console.log("Szerver elindult a " + PORT + "-on")
    // AltGr +7 = `
    console.log(`Szerver elindult a  ${PORT}-on`);
});