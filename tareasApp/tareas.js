const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
    guardarTarea(tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado(estado) {
        let tareas = this.leerJSON();

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });

        return tareasFiltradas;
    }
}

module.exports = archivoTareas;