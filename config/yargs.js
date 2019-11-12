const descripcion = {
    demand: true,
    alias: 'd',
    describe: 'Ingresa una descripción para la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    describe: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elmento', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina la tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};