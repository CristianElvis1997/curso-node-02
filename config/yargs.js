
// var colors = require('colors');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base para multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestrar la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el limite de la tabla'
                })
                .check((argv, option) => {
                    if (isNaN(argv.b)) {
                        throw 'Error: inserte un valor numerico'
                    }
                    return true;
                })
                .argv;
    

    module.exports = argv;