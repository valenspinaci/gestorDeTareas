class Tarea{
    constructor(titulo, descripcion, fecha, estado){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = "Pendiente";
    }
}

class Gestor{
    constructor(nombre, apellido, listaDeTareas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.listaDeTareas = [];
    }

    //Metodos
    mostrarTareas = () => {
        this.listaDeTareas.forEach((tarea)=>{
            console.log(tarea)
        })
    }

    agregarTarea = (tarea) => {
        if(tarea){
            this.listaDeTareas.push(tarea)
            console.log("Tarea agregada")
        }else{
            console.log("No se pudo agregar")
        }
    }

    eliminarTarea = (idTarea) =>{
        if(this.listaDeTareas[idTarea]){
            this.listaDeTareas.splice(idTarea, 1)
            console.log("Tarea eliminada")
        }else{
            console.log("No existe esa tarea")
        }
    }

    limpiarTareas = () => {
        if(this.listaDeTareas){
            this.listaDeTareas.splice(0, this.listaDeTareas.length)
        }else{
            console.log("Hubo un error")
        }
    }

    marcarProceso = (idTarea) => {
        if(this.listaDeTareas[idTarea] && this.estado != "En proceso"){
            this.listaDeTareas[idTarea].estado = "En proceso"
            console.log("Estado de la tarea modificado")
        }else{
            console.log("No se ha podido modificar el estado")
        }
    }

    marcarCompletado = (idTarea) => {
        if(this.listaDeTareas[idTarea] && this.estado != "Completada"){
            this.listaDeTareas[idTarea].estado = "Completada"
            console.log("Estado de la tarea modificado")
        }else{
            console.log("No se ha podido modificar el estado")
        }
    }

    editar = (idTarea, titulo, descripcion, fecha) => {
        if(this.listaDeTareas[idTarea]){
            this.listaDeTareas[idTarea].titulo = titulo;
            this.listaDeTareas[idTarea].descripcion = descripcion;
            this.listaDeTareas[idTarea].fecha = fecha;
            console.log("Tarea editada")
        }else{
            console.log("No existe esa tarea")
        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------------
    //FALTA AGREGAR METODO PARA ACTUALIZAR DOM --------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------
}

//Testeo
const g1 = new Gestor("Valentino", "Spinaci")
const t1 = new Tarea("Estudiar", "Algoritmos", new Date("2024-09-14"))
const t2 = new Tarea("Limpiar", "Living", new Date("2024-09-15"))
const t3 = new Tarea("Programar", "Aplicacion", new Date("2024-09-15"))

g1.agregarTarea(t1)
g1.agregarTarea(t2)
g1.agregarTarea(t3)
g1.marcarProceso(0)
g1.marcarCompletado(1)
g1.eliminarTarea(2)

g1.mostrarTareas()

g1.editar(0, "Hacer", "Mate", new Date("2024-10-01"))

g1.mostrarTareas()