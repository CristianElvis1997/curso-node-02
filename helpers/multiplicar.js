
const fs = require('fs');

var colors = require('colors');

tablaMultiplicar = (base, list, limit) => {
    return new Promise((resolve, reject) => {
        console.log(`Tabla del ${base} del 1 al ${limit}`);

        let salida = '';

        for (let index = 1; index <= limit; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }
        if (list === true) {
            console.log(salida.underline.gray);

            fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
                if (err) throw err;
                resolve(`tabla-${base}.txt`);
            });
        } else {
            console.log('=-=-=-=-=-=-=-=-');
            reject(`tabla-${base}.txt ==> list is false`);
        }
    });
} 

module.exports = {
    tablaMultiplicar
}