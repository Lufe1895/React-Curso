import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve();
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe.');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync =  (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve();
            const heroe = getHeroeById(id);
            // console.log(heroe);
            // resolve(heroe);
            // reject('No se pudo encontrar el héroe.');
            heroe ? resolve(heroe) : reject('No se pudo encontrar el héroe.');
        }, 2000);
    });
}

getHeroeByIdAsync(1).then(console.log).catch(console.warn);