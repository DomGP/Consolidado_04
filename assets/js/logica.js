const presupuesto = document.querySelector("#presupuesto")
const presupuestoInput = document.querySelector("#presupuestoInput")
const btnCalcular = document.querySelector("#btnCalcular")
const nombreGasto = document.querySelector("#nombreGasto")
const valorGasto = document.querySelector("#valorGasto")
const gastosNombreInput = document.querySelector("#gastosNombreInput")
const gastosCantidadInput = document.querySelector("#gastosCantidadInput")
const btnAñadirGasto = document.querySelector("#btnAñadir")

const sumaGastos = document.querySelector("#sumaGastos")
const valorSaldo = document.querySelector("#valorSaldo")

// se declara una variable tipo string
let nuevoValor = "0"
const nuevoGasto = [
    // {nombre: "nombre del gasto", cantidad: "Valor del gasto"}
];

// se hace click en el boton
btnCalcular.addEventListener("click", () => {
    //se establece una variable let para identificar lo ingresado en el input
    let valorIngresado = (parseInt(presupuestoInput.value))
    // se igual la variable anterior a la variable valorIngresado en el input
    nuevoValor = valorIngresado
    presupuestoInput.value = ""
    // se llama a la funcion para mostrarlo en el html
    renderValores()
})

function renderValores() {

    //se crea una variabla html vacia
    let html = ""

    //aqui en la html se asigna directamente el valor de la variable nuevoValor
    html = `<p>$${nuevoValor.toLocaleString('es-CL')}</p>`

    //se muestra en el html 
    presupuesto.innerHTML = html
}

// CUADRO DE GASTOS


btnAñadirGasto.addEventListener("click", () => {
    nuevoGasto.push({
        nombre: gastosNombreInput.value,
        cantidad: parseInt(gastosCantidadInput.value)
    });

    /* gastosNombre = {id: Date.now(), nombre: gastosNombreInput.value}
    gastosCantidad = {id: Date.now(), cantidad: parseInt(gastosCantidadInput.value)} */

    /* nuevoGasto.push({nombre: gastosNombreInput.value, cantidad: parseInt(gastosCantidadInput.value)}) */

    gastosNombreInput.value = ""
    gastosCantidadInput.value = ""
    console.log("Gasto añadido")

    renderGastos ()
})

function borrar(index){
    nuevoGasto.splice(index,1)
    console.log("Invitado borrado")

    renderGastos()
}

function renderGastos(){
    let hmtlNombre = ""
    let htmlValor = ""
    let index = 0
    for (let valor of nuevoGasto){
        hmtlNombre += `<p>${valor.nombre} </p>`;
        htmlValor += `<p>$${valor.cantidad.toLocaleString('es-CL')} <button onclick="borrar(${index})"<i class="fa-solid fa-trash"></i> </button></p>`;
        index ++;
    }
    nombreGasto.innerHTML = hmtlNombre;
    valorGasto.innerHTML = htmlValor;

    calcularGastos();

}

function calcularGastos() {
    let sumaGastos = nuevoGasto.reduce((sumaGastos, cantidad) =>{
        return sumaGastos + cantidad.cantidad
    }, 0)

    document.getElementById("sumaGastos").innerHTML = Number(sumaGastos).toLocaleString("es-CL");

    let saldo = nuevoValor - sumaGastos;
    document.getElementById("valorSaldo").innerHTML = saldo.toLocaleString("es-CL");
}



