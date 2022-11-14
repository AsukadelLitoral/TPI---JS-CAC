//valor de las entradas
const valorEntrada = 200;

//porcentajes
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//llamo los valores por ID
const cantidadEntradas = document.getElementById('cantidad');

const categoria = document.getElementById('categoriaSelect');

const totalCompra = document.getElementById('totalCompra');

const botonBorrar = document.getElementById('botonBorrar')

const botonResumen = document.getElementById('botonResumen');



function totalPagar() {
    //valor total de la Entrada
    let totalValor = (cantidadEntradas.value) * valorEntrada;
    if(categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    } 
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
    else{
        totalValor = totalValor;
    }

    totalCompra.innerHTML = `Total a pagar:$ ${totalValor}`;
}

//boton de Resumen
botonResumen.addEventListener('click', totalPagar);

//boton de Borrar
botonBorrar.addEventListener('click', ()=>{
    totalCompra.innerHTML = `Total a pagar:$`
})

