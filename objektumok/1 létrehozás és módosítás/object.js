// Objektum létrehozása
const lakasCim = {
    hely: 'Budapest',
    utca: 'Petőfi u.',
    hazszam: 11,
    emelet: 4,
    ajto: 22
};


// A tulajdonságértékek elérése
console.log(lakasCim.hely);
// vagy
console.log(lakasCim["utca"]);


// Objektum bővítése
lakasCim.kapucsengo = 22;
lakasCim["tulajdonos"] = "Gipsz Jakab";
lakasCim.szobaszam = 3;
lakasCim.kiado = true;

console.log(lakasCim.kapucsengo);
console.log(lakasCim.tulajdonos);


// A tulajdonságok értékeinek módosítása
lakasCim.hazszam = 15;
lakasCim["emelet"] = 3;

console.log(lakasCim.hazszam);
console.log(lakasCim.emelet);


// Objektumtulajdonság törlése
delete lakasCim.hely;
delete lakasCim["kiado"];

console.log(lakasCim.hely);   // undefined
console.log(lakasCim.kiado);  // undefined


// Üres objektum létrehozása
const tanuloiAdatok = {};


// Üres objektum feltöltése, úgy működik, mint a bővítés
tanuloiAdatok.nev = "Kossuth Lajos";
tanuloiAdatok.osztaly = "8.c";
tanuloiAdatok.szuletesiEv = 1802;


// Hivatkozás a tulajdonságra változóval
let tulajdonsag = "nev";
console.log(tanuloiAdatok[tulajdonsag]); // tanuloiAdatok["nev"] létezik  // Kossuth Lajos eredmény
console.log(tanuloiAdatok.tulajdonsag); // tanuloiAdatok."nev" nem létezik   // undefined eredmény