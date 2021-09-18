const persona = {
    nombre: 'Luis',
    edad: 26,
    clave: 'Toral',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const context = ({clave, nombre, edad, rango = "Chido"}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.123123,
            lng: -12.123123
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = context(persona);
console.log(nombreClave, anios);
console.log(lat, lng);