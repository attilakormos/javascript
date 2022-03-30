// Kiinduló tömbök
let adatok = ['labda', 'könyv', 9, 'lapát', 4, true, 'ecset', 7.22, false];


// KERESÉS ELŐFORDULÁSRA (includes)
// Megadja, hogy a keresett elem megtalálható-e a tömbben
// Visszatérési értéke true, vagy false
let eredmeny = adatok.includes('lapát');
console.log(eredmeny); // true

eredmeny = adatok.includes(false);
console.log(eredmeny); // true

eredmeny = adatok.includes(7);
console.log(eredmeny); // false

// Második paraméterként megadható melyik indexű elemtől kezdje a keresést
eredmeny = adatok.includes('könyv', 2);
console.log(eredmeny); // false



// KERESÉS POZÍCIÓRA (indexOf)
// Megadja, hogy a keresett elem melyik helyen van a tömbben.
// Visszatérési értéke egy index érték, vagy -1 (a keresett elem nem található)
eredmeny = adatok.indexOf('lapát');
console.log(eredmeny); // 3

eredmeny = adatok.indexOf(false);
console.log(eredmeny); // 8

eredmeny = adatok.indexOf(7);
console.log(eredmeny); // -1

// Második paraméterként megadható melyik indexű elemtől kezdje a keresést
// Ettől függetlenül a visszaadott érték az elem tömbben elfoglalt indexe lesz
eredmeny = adatok.indexOf('ecset', 2);
console.log(eredmeny); // 6

