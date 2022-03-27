// Használata
// egyszerű: - bevásárlólista, - lottószámok, - rendetlen adatok 
// összetett: - lejátszólisták, - hozzászólások, - tanulók

// Üres bevásárlólista tömb létrehozása
let bevasarlolista = [];

// Tömb feltöltése
bevasarlolista = ['sajt', 'kenyér', 'tej', 'szalámi'];

// Tömb elemének elérése - Tömbneve[index]
console.log(bevasarlolista[0]);  // az első elem indexe a 0

// Tömb elemszáma
console.log(bevasarlolista.length);

// Tömb utolsó eleme
let utolso = bevasarlolista.length - 1 
console.log(bevasarlolista[utolso]);

// Lottószámok tömb létrehozása - második módszer
let lotto = new Array(2, 7, 25, 36, 71);

console.log(lotto);

// Rendetlen adatok tömb létrehozása - eltérú elemtípusok
let rendetlen = ['gumikacsa', 25, 721, "zokni", 79.6, true];

console.log(rendetlen);
