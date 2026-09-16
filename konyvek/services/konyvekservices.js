const {konyvek} = require('../database/database');

const getKonyvek = (req, res) =>{
    res.status(200).json(konyvek);
}

// add vissza az 5-ös id könyvet
// paraméterezés
// paraméter = olyan mint egy változó csak a függvényeknek
const getKonyvById = (req, res) => {
    // ez egy objektum = req.params.id(alapértelmezetten string)
    let paramId = Number(req.params.id);
    let konyv = konyvek.filter(konyv => konyv.id == paramId);
    //végpontoknak a válasza a kérdésre
    res.json(konyv);
}

const getKonyvekByAr = (req, res) => {
    let paramAr = Number(req.params.ar);
    let konyvekByAr = konyvek.filter(konyv => konyv.price < paramAr);
    res.json(konyvekByAr);
}

//1.feladat: Készíts egy GET /konyvek/db végpontot, amely visszaadja, hány könyv található a tömbben.
const getKonyvDarab = (req, res) => {
    res.json({darab: konyvek.length})
}

// 2.feladat: Készíts egy GET /konyvek/cim/:cim végpontot, amely megkeresi a megadott című könyvet.
const getKonyvByCim = (req, res) => {
    // paramétert kisbetűsre, szóköz nélkülire
    // könyv címet is kisbetűsre, szóköz nélkülire

    const cim = req.params.cim.toLowerCase().trim();
    //console.log(cim);
    const konyv = konyvek.filter(konyv => {
        let kisbetus = konyv.title.toLowerCase().replaceAll(' ', '');
        if (kisbetus == cim){
            return konyv
        }
    });
    /*  SQLben
        SELECT *
        FROM konyvek
        WHERE LOWER(title) = ${parameter}
    */
    res.json(konyv);
}

// exportálás!!!
module.exports = {
    getKonyvek,
    getKonyvById,
    getKonyvekByAr,
    getKonyvDarab,
    getKonyvByCim
}