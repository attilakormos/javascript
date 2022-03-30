// Kiinduló tömbök
let gyumolcsok = ['alma', 'körte', 'eper', 'banán', 'narancs', 'kivi'];
let zoldsegek = ['répa', 'krumpli', 'retek', 'hagyma'];
let husaru = ['csirkemell', 'csirkecomb', 'csirke szárny', 'sertés karaj', 'sertés lapocka', 'sertéscomb'];
let tejaru = ['tej', 'sajt', 'túró', 'vaj', 'joghurt'];



// TÖMBÖK EGYESÍTÉSE (concat)
// Bevásárlólista tömb létrehozása a fenti tömbökből

// Gyümölcsök és zöldségek tömbök egyesítése
let zoldseges = gyumolcsok.concat(zoldsegek);
console.log(zoldseges);

// Húsárú és tejárú tömbök egyesítése
let piac = husaru.concat(tejaru);
console.log(piac);

// Gyümölcsök, zöldségek, húsárú és tejárú tömbök egyesítése
let hypermarket = gyumolcsok.concat(zoldsegek, husaru, tejaru);
console.log(hypermarket);



// TÖMBÖK SZELETELÉSE (slice)
// Déligyümölcs, csirkehús és sertéshús tömbök létrehozása a kiinduló tömbökből

// A harmadik indextől a hatodik indexig
let deligyumolcs = gyumolcsok.slice(3, 6);
console.log(deligyumolcs);

// A harmadik indextől a tömb végéig
deligyumolcs = gyumolcsok.slice(3);
console.log(deligyumolcs);

// Az utolsó három elemet
deligyumolcs = gyumolcsok.slice(-3);
console.log(deligyumolcs);

// Csirkehús és sertéshús tömbök létrehozása és feltöltése
let csirkehus = husaru.slice(0, 4);
let serteshus = husaru.slice(3);
console.log(csirkehus);
console.log(serteshus);



// TÖMBÖK MÁSOLÁSA
// Másoláskor valójában csak azonos memóriarekeszre hivatkozás történik az új változóval

let tejtermek = tejaru;
console.log(tejtermek);

// Tejárú tömb utolsó elemének eltávolítása
tejaru.pop();
// Tejtermék tömb tartalma, ami elméletileg nem kellene, hogy változzon
console.log(tejtermek);

// Ha tényleg egy új példányra van szükség a tömbből, akkor a slice erre is jó
tejaru.push('joghurt');
// A tejárú tömb minden eleme kerüljön a tejtermék változóba
tejtermek = tejaru.slice();
console.log(tejtermek);

// Tejárú tömb utolsó elemének eltávolítása
tejaru.pop();
console.log(tejaru);
// Tejtermék tömb tartalma, ami gyakorlatilag se változik, nincs köze egymáshoz a két tömbnek
console.log(tejtermek);
