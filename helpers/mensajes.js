import colors from 'colors';

const mostrarMenu = async () => {

    return new Promise(resolve => {
        console.clear();
        console.log('==========================='.cyan);
        console.log('   Seleccione una opción   '.green);
        console.log('===========================\n'.cyan);

        console.log(`1. Crear task `);
        console.log(`2. Listar tasks `);
        console.log(`3. Listar tasks completadas `);
        console.log(`4. Listar tasks pendientes `);
        console.log(`5. Completar task(s)`);
        console.log(`6. Borrar task`);
        console.log(`0. Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Selecciones una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });

}
const pause = () => {

    return new Promise (resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'Enter'.blue} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
    
}

module.exports = {
    mostrarMenu,
    pause
}