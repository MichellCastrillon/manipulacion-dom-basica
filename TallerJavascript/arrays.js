const array = [1, 'jajaja', true, false];

const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito','Begetales'],
};
//conovierte las key del objeto en array
let key = Object.values(obj);
for(let i=0; i<key.length; i++){
    console.log(key[i])
}