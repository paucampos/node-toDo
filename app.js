const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

const comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('=== POR HACER ==='.green);
            console.log(tarea.descripcion);
            console.log('Completado: ', tarea.completado);
            console.log('=================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = toDo.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no reconocido');
}