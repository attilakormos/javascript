// Kiindulótömb létrehozása
let csapatok = ['Ferencváros', 'Videoton', 'Debrecen','Honvéd','MTK','Paks'];

// ELEMEK HOZZÁADÁSA
// Egy új elem hozzáadása a tömb végéhez - tomb.length index is ugyanez 
csapatok.push('Vasas');
console.log(csapatok);

// Új elemek hozzáadása a tömb végéhez
csapatok.push('Stadler', 'Gyirmót', 'REAC'); // Több paraméterrel is használható
console.log(csapatok);

// Egy új elem hozzáadása a tömb elejéhez
csapatok.unshift('Diósgyyőr'); // Több paraméterrel is használható
console.log(csapatok);

// Új elem hozzáadása a tömb x-edik indexeleméhez
let x = 1; // Ez valójában a második pozíció
csapatok.splice(x, 0, 'Kaposvár');
console.log(csapatok);

// Új elemek hozzáadása a tömb x-edik elemétől
x = 2;
csapatok.splice(x, 0, 'Békéscsaba', 'Nyíregyháza', 'Pécs');
console.log(csapatok);


// ELEMEK TÖRLÉSE
// Tömb utolsó elemének törlése - változóba írható a törölt elem értéke
let torolt_elem = csapatok.pop();
console.log(csapatok);
console.log(torolt_elem);

// Tömb első elemének törlése - változóba írható a törölt elem értéke
torolt_elem = csapatok.shift();
console.log(csapatok);
console.log(torolt_elem);

// Tömb x-edik indexelemének törlése
x = 3; // Ez valójában a negyedik elemet jelöli
let elemszam = 1; // Hány elem kerüljön törlésre a megadott indextől
torolt_elem = csapatok.splice(x, elemszam);
console.log(csapatok);
console.log(torolt_elem); // Egy tömböt ad vissza egy elem esetén is

// Tömb több elemének törlése
x = 0; // Az első elemtől kezdve
elemszam = 2; // Két elemet
torolt_elem = csapatok.splice(x, elemszam);
console.log(csapatok);
console.log(torolt_elem);



