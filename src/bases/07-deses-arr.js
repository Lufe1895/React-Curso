const personajes = ['Diane', 'Bojack', 'Todd'];

const [ , , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const state = (valor) => {
    return [valor, () => {console.log('Hola, mundo.')}];
}

const [valor, funcion] = state('Luis');
console.log(valor);
funcion();