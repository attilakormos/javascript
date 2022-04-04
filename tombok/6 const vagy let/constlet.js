// Kiinduló tömb
const tanulok = ['Ábel', 'Ákos', 'Ármin', 'Ágota'];

// Tömb módosítása
// Nem hajtódik végre, konstans nem módosítható, legalábbis így
// El is akadna a kód, ha nem lenne megjegyzésben

// tanulok = ['Bence', 'Béla', 'Beáta', 'Bulcsú'];

// Így viszont igen
tanulok.push('Ágnes');
console.log(tanulok);
// Így is
tanulok.shift();
console.log(tanulok);
// Így is
tanulok.unshift('Ádám');
console.log(tanulok);
// És végül így is
tanulok.pop();
console.log(tanulok);

// De a splice is használható
tanulok.splice(2, 0, 'Árpád');
console.log(tanulok);

// Az egyetlen, amit const-al deklarált tömbbel nem lehet megtenni,
// hogy nem írható felül az egész tömb egyszerre
