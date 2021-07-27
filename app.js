
const colors = require('colors');

const {tablaMultiplicar} = require('./helpers/multiplicar');

const argv = require('./config/yargs');



//console.log(process.argv);
console.log(argv);
console.log('===============');
console.log(argv.base);
console.log(argv.listar);
console.log(argv.hasta)
console.log('===============');

//console.log('base obtenida desde yargs: ', argv.base);


// const [ , , argv3 = 'base=5'] = process.argv;
// const [, base = 5] = argv3.split('=');
// console.log(base);


// const base = 3;

tablaMultiplicar(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => {
        console.log(nombreArchivo + ' ' + 'creado con exito!!');
        // console.log('un mensaje trap'.trap);
    })
    .catch((mensajeFalse) => {
        console.log(mensajeFalse);
    })

