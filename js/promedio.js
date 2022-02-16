function calcularMediaAritmetica(lista){
const sumaLista= lista.reduce(
    function (valorAcumulado=0, nuevoElemento){
        return valorAcumulado+nuevoElemento;
    }
);
const promedioLista=sumaLista/lista.length;
console.log(promedioLista);
const result=document.getElementById("result");
result.innerText="El promedio es de "+ promedioLista;
}

function interaccionHTML(x){
    const si1=document.getElementById("input");
    const value= si1.value.split(',');
    const nuevo = value.map((i) => Number(i));
    console.log(nuevo);
    calcularMediaAritmetica(nuevo);
}
