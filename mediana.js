function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    const result=document.getElementById("result");
    result.innerText="El promedio es de "+ promedioLista;
    }
function conversion(){
        const si1=document.getElementById("input");
        const value= si1.value.split(',');
        const nuevo = value.map((i) => Number(i));
        nuevo.sort(function(a, b){return a - b});
        console.log(nuevo);
        if (esPar(nuevo)){
            console.log("si")
        }else{
            console.log("no")
        }
    }

const mitadLista1=parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito % 2===0){
        return true;
    }else{
        return false;
    }
}

let mediana;
if (esPar(lista1.length)){ 
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1]
    const promedioElemento1y2=calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana=promedioElemento1y2;
} else{
 mediana=lista1[mitadLista1];
}
function interaccionHTML(){
    conversion();

}