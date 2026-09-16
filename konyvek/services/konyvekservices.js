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

// 3.feladat: Készíts egy GET /konyvek/szerzo/:szerzo végpontot, amely visszaadja az adott szerző összes könyvét.
const getKonyvBySzerzo = (req, res) => {
    const szerzo = req.params.szerzo.toLowerCase().replaceAll(' ', '');
    const konyv = konyvek.filter(konyv => {
        let kisbetus = konyv.author.toLowerCase().replaceAll(' ', '');
        if (kisbetus == szerzo){
            return konyv
        }
    });
    res.json(konyv);
}

// 4.feladat: Készíts egy GET /konyvek/kategoria/:kategoria végpontot, amely csak a megadott kategóriájú könyveket adja vissza.
const getKonyvekByCategory = (req, res) => {
    const kategoria = req.params.kategoria.toLowerCase().replaceAll(' ', '');
    // a filter egy új listát csinál és a return tölti meg
    const konyv= konyvek.filter(konyv => {
        let kisbetus = konyv.category.toLowerCase().replaceAll(' ', '');
        if (kisbetus == kategoria){
            return konyv
        }
    });
    res.json(konyv);
}

// 5.feladat: Készíts egy GET /konyvek/ar-felett/:ar végpontot, amely azokat a könyveket adja vissza, amelyek ára nagyobb, mint a paraméterben megadott ár.
const getKonyvekByArFelett = (req, res) => {
    let paramArFelett = Number(req.params.arfelett);
    let konyvekByArFelett = konyvek.filter(konyv => konyv.price > paramArFelett);
    res.json(konyvekByArFelett);
}

// 6.feladat: Készíts egy GET /konyvek/oldal/:oldal végpontot, amely azokat a könyveket adja vissza, amelyek oldalszáma kisebb a megadott értéknél.
const getKonyvekByOldal = (req, res) => {
    let paramOldal = Number(req.params.oldal);
    let konyvekByOldal = konyvek.filter(konyv => konyv.pages < paramOldal);
    res.json(konyvekByOldal);
}

// 7.feladat: Készíts egy GET /konyvek/ev/:ev végpontot, amely az adott évnél később megjelent könyveket adja vissza.
const getKonyvekByEv = (req, res) => {
    let paramEv = Number(req.params.ev);
    let konyvekByEv = konyvek.filter(konyv => konyv.year > paramEv);
    res.json(konyvekByEv);
}

// 8.feladat: Készíts egy GET /konyvek/nepszeru/:views végpontot, amely csak azokat a könyveket adja vissza, amelyek megtekintéseinek száma nagyobb a megadott értéknél.
const getKonyvekByMegtekintes = (req, res) => {
    let paramMegtekintes = Number(req.params.nepszeru);
    let konyvekByMegtekintes = konyvek.filter(konyv => konyv.views > paramMegtekintes);
    res.json(konyvekByMegtekintes);
}

// 9.feladat: Készíts egy GET /konyvek/legolcsobb végpontot, amely csak a legolcsóbb könyvet adja vissza.


// exportálás!!!
module.exports = {
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
}