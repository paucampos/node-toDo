const fs = require('fs');
const colors = require('colors');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)
            throw new Error('Hubo un error guardando', err);
        else
            console.log(`data.json`);
    });
};

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }
};

const getListado = () => {
    cargarDB();
    return listadoToDo;
};

const crear = (descripcion) => {
    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();

    return toDo;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const eliminar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoToDo.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (nuevoListado.length === listadoToDo.length) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }

    // Otra manera
    // let index = listadoToDo.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });

    // if (index >= 0) {
    //     listadoToDo.splice(index, 1);
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
};


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}