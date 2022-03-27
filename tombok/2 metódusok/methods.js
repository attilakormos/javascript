// Kiindulótömb létrehozása
let csapatok = ['Ferencváros', 'Videoton', 'Debrecen','Honvéd','MTK','Paks'];

// Új elem hozzáadása a tömb végéhez - tomb.length index is ugyanez 
csapatok.push('Vasas');
console.log(csapatok);

// Új elem hozzáadása a tömb elejéhez
csapatok.unshift('Diósgyyőr');
console.log(csapatok);

// Tömb utolsó elemének törlése - változóba írható a törölt elem értéke
let torolt_elem = csapatok.pop();
console.log(csapatok);
console.log(torolt_elem);

// Tömb első elemének törlése - változóba írható a törölt elem értéke
torolt_elem = csapatok.shift();
console.log(csapatok);
console.log(torolt_elem);


