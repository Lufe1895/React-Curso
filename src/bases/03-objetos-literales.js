const persona = {
    nombre: 'Luis',
    apellido: 'Antonio',
    edad: 45,
    direccion: {
        ciudad: 'Oaxaca',
        zip: 68030,
        lat: 14.102983,
        lng: 13.46
    },
};

const persona2 = { ...persona };
persona2.nombre = 'Fernando'

console.log(persona);
console.log(persona2);