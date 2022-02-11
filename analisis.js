//Funciones Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
    }

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad1=lista[mitad-1];
        const personaMitad2=lista[mitad];
        const mediana=calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad=lista[mitad];
        return personaMitad;
    }
}
//Mediana general
const salariosCol=colombia.map(
    function(persona){
        return persona.salary;
    }
);
const salariosColSorted=salariosCol.sort(
    function(a, b){
        return a - b;
    }
);


const medianaGeneralCol=medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart=(salariosColSorted.length * 90)/100;
const spliceCount=salariosColSorted.length-spliceStart;
const salariosColTop10=salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col=medianaSalarios(salariosColTop10);


console.log({medianaGeneralCol, medianaTop10Col});
function medianaGeneral(){
    const mediana1=document.getElementById("mediana1");
    mediana1.innerText="La mediana general es de " + medianaGeneralCol;
}
function medianaTop10(){
    const mediana2=document.getElementById("mediana2");
    mediana2.innerText="La mediana general es de " + medianaTop10Col;
}
//Codigo de la obtencion de la capacidad de endeudamiento
function capEndeudamiento(){
    const ingresos=document.getElementById("inputIngresos");
    const ingresos1=Number(ingresos.value);
    const gastos=document.getElementById("inputGastos");
    const gastos1=Number(gastos.value);
    const capacidad=(ingresos1-gastos1)*0.35;
    const endeudamiento=document.getElementById("endeudamiento");
    if(capacidad<0){
     endeudamiento.innerText="No tienes capacidad de endeudamiento"   
    } else{
    endeudamiento.innerText="Tu capacidad de endeudamiento mensual es de "+capacidad;}
}