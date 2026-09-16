const express = require("express");
const app = express();
// http://localhost:3030
const PORT = 3030;

//importálás!!!
const {
    getKonyvek,
    getKonyvById,
    getKonyvekByAr,
    getKonyvDarab,
    getKonyvByCim,
    getKonyvBySzerzo,
    getKonyvekByCategory,
    getKonyvekByArFelett,
    getKonyvekByOldal,
    getKonyvekByEv,
    getKonyvekByMegtekintes
} = require("./services/konyvekservices")

// ez kell ahhoz, hogy request body-t tudjak küldeni
app.use(express.json());

app.get("/", (req, res) => {
    // fontos a státuszkód megadása
    res.status(200).json({info: "Könyvek backend alkalmazás"})
});

// a paraméterezett végpontokat mindig alulra kell írni!
//routes
app.get("/konyvek", getKonyvek);

app.get("/konyvek/db", getKonyvDarab);

// fontos a paramsnál is az legyen ami a kettőspont után
// amikor ellenőrzöd akkor csak a számot kell beírni az id már nem kell oda
// paraméter = /:id
// egy végpontnak több paramétere is lehet
app.get("/konyvek/:id",getKonyvById);

app.get("/konyvek/ar/:ar",getKonyvekByAr);

app.get("/konyvek/cim/:cim", getKonyvByCim);

app.get("/konyvek/szerzo/:szerzo", getKonyvBySzerzo);

app.get("/konyvek/kategoria/:kategoria", getKonyvekByCategory);

app.get("/konyvek/arfelett/:arfelett", getKonyvekByArFelett);

app.get("/konyvek/oldal/:oldal", getKonyvekByOldal);

app.get("/konyvek/ev/:ev", getKonyvekByEv);

app.get("/konyvek/nepszeru/:nepszeru", getKonyvekByMegtekintes);

// ez indítja az appot
app.listen(PORT, () => {
    //console.log("Szerver elindult a " + PORT + "-on")
    // AltGr +7 = `
    console.log(`Szerver elindult a  ${PORT}-on`);
});