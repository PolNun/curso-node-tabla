const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Hasta que número se multiplica'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'La base tiene que ser un número';
        if (isNaN(argv.l)) throw 'El listar tiene que ser un booleano';
        return true;
    })
    .argv;

module.exports = argv;