import heroes, { owners } from '../data/heroes';

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeById(2));

console.log(getHeroesByOwner('DC'));

console.log(owners);