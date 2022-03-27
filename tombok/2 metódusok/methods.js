// Kiindulótömb létrehozása
let csapatok = ['Ferencváros', 'Videoton', 'Debrecen','Honvéd','MTK','Paks'];

// Új elem hozzáadása a tömb végéhez - tomb.length index is ugyanez 
csapatok.push('Vasas');
console.log(csapatok);

// Új elem hozzáadása a tömb elejéhez
csapatok.unshift('Diósgyyőr');
console.log(csapatok);

// Új elem hozzáadása a tömb x-edik indexeleméhez
let x = 1; // Ez valójában a második pozíció
csapatok.splice(x, 0, 'Kaposvár');
console.log(csapatok);



// Tömb utolsó elemének törlése - változóba írható a törölt elem értéke
let torolt_elem = csapatok.pop();
console.log(csapatok);
console.log(torolt_elem);

// Tömb első elemének törlése - változóba írható a törölt elem értéke
torolt_elem = csapatok.shift();
console.log(csapatok);
console.log(torolt_elem);

// Tömb x-edik indexelemének törlése
x = 4; // Ez egy index, valójában az ötödik elemet jelöli
let elemszam = 1; // Hány elem kerüljön törlésre a megadott indextől
torolt_elem = csapatok.splice(x, elemszam);
console.log(csapatok);
console.log(torolt_elem); // Egy tömböt ad vissza egy elem esetén is





