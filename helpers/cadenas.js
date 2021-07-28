
const fs = require('fs');

functionCadena = () => {
    
    return new Promise((resolve, reject) => {
        let textcader = '';
        for (let index = 0; index < 10; index++) {
            textcader += `cadena ${index}\n`;
        }
        console.log(textcader);

        fs.writeFile('txtcadena.txt', textcader, err => {
            if (err) throw err;
            resolve('txtcadena.txt Creado con exito!!');
        });
    })
}

module.exports = {
    functionCadena
}
