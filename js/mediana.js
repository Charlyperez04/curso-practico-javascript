function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    const result=document.getElementById("result");
    result.innerText="La mediana es de "+ promedioLista;
    console.log(promedioLista);
    }
function conversion(){
        const si1=document.getElementById("input");
        const value= si1.value.split(',');
        const nuevo = value.map((i) => Number(i));
        nuevo.sort(function(a, b){return a - b});
        console.log(nuevo);
        if (esPar(nuevo.length)){
            const mitadLista1=parseInt(nuevo.length/2);
            const elemento1=nuevo[mitadLista1-1];
            const elemento2=nuevo[mitadLista1]
            const promedioElemento1y2=calcularMediaAritmetica([elemento1,elemento2,])
        }else{
            const mitadLista1=parseInt(nuevo.length/2);
            mediana=nuevo[mitadLista1];       
            console.log(mediana);
            const result=document.getElementById("result");
            result.innerText="La mediana es de "+ mediana;
         }
    }

function esPar(numerito){
    if(numerito % 2===0){
        return true;
    }else{
        return false;
    }
}
