// Példák létrehozásra:
// Egy dimenziós: - bevásárlólista, - lottószámok, - rendetlen adatok 


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

// Nem létező indexelemre hivatkozás eredménye undefined
console.log(bevasarlolista[4]);


// Lottószámok tömb létrehozása - második módszer
let lotto = new Array(2, 7, 25, 36, 71);

console.log(lotto);


// Rendetlen adatok tömb létrehozása - eltérú elemtípusok
let rendetlen = ['gumikacsa', 25, 721, "zokni", 79.6, true];

console.log(rendetlen);


// Bevásárlósita elemeinek egyszerű módosítása
bevasarlolista = ['sajt', 'kenyér', 'tej', 'szalámi'];

bevasarlolista[2] = "kakaós tej";
bevasarlolista[3] = "téliszalámi";

console.log(bevasarlolista);

// Bevásárlólista tömb bővítése egy nem létező indexre történő hivatkozással
// !!! NEM TANÁCSOS !!!
bevasarlolista[4] = "kolbász";

console.log(bevasarlolista);

// Bevásárlólista tömb bővítése az elemszámra való hivatkozással
bevasarlolista[bevasarlolista.length] = "étolaj";
bevasarlolista[bevasarlolista.length] = "tökmag";
bevasarlolista[bevasarlolista.length] = "zsemlemorzsa";

console.log(bevasarlolista);

// Mi a gond a következő kóddal?
elemszam = bevasarlolista.length;
bevasarlolista[elemszam] = "Balaton szelet";
bevasarlolista[elemszam] = "túró";
bevasarlolista[elemszam] = "zsönle";

console.log(bevasarlolista);

// két dimenziós: - lejátszólisták, - hozzászólások, - tanulók