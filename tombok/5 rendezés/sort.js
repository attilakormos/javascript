// Kiinduló tömbök
let napok = ['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat', 'vasárnap'];
let nevek = ['Kinga', 'Péter', 'Eszter', 'Dénes', 'Katalin', 'László', 'Gyula'];
let szamok = [211, 45, 51.3, -84, 204, 179, 0.15, 1234];
let vegyes = ['labda', true, -14, 21, 'kecske', 'sikló', 200];


// Az első két tömb (napok, nevek) rendezve, semmi meglepetéssel (sort)
napok.sort();
console.log(napok);
nevek.sort();
console.log(nevek);


// Első két tömb fordított rendezése (sort, reverse)
napok.sort().reverse();
console.log(napok);
nevek.sort().reverse();
console.log(nevek);


// Számok rendezése (szamok tömb), UTF-8 tábla szerint rendez, nem éppen ez volt a cél
szamok.sort();
console.log(szamok);


// Számok tényleges rendezése
function szamrendezo(a, b) {
    return a - b;
}
szamok.sort(szamrendezo);
console.log(szamok);


// Számok fordított rendezése
function szamrendezo_f(a, b) {
    return b - a;
}
szamok.sort(szamrendezo_f);
console.log(szamok);


// Arrow function-el (így kell használni, a mikéntje rejtély)
szamok.sort((a, b) => a - b);
console.log(szamok);


// Számok fordított rendezése
szamok.sort((a, b) => b - a);
console.log(szamok);