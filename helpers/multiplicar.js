const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.green} ${base * i} \n`;
        }

        if (listar) console.log(consola);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
            console.log(colors.green(`El archivo tabla-${base}.txt ha sido creado`));
        });
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}