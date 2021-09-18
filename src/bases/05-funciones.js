// const saludar = function(nombre) {
//     return `Hola, ${nombre}.`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}.`;
}

const saludar3 = (nombre) => `Hola, ${nombre}.`;

const saludar4 = () => `Hola, mundo.`;

console.log(saludar2('Luis'));
console.log(saludar3('Fernando'));
console.log(saludar4());

const getUser = () => 
({
    uid: 'ABC123',
    username: 'Lufe1895'
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

console.log(getUsuarioActivo("Toral"));