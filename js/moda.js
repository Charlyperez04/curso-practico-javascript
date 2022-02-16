
const lista1Count={};

function modaInteraccion(){
    const si1=document.getElementById("inputModa");
    const value= si1.value.split(',');
    const nuevo = value.map((i) => Number(i));
    nuevo.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento]+=1;
            } else{
            lista1Count[elemento]=1;
            }
        }
    );
    const lista1Array=Object.entries(lista1Count).sort(function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    });
    const moda=lista1Array[lista1Array.length-1];
    const resultModa=document.getElementById("resultModa");
    resultModa.innerText="La moda es de "+ moda[0];
    const numberModa=document.getElementById("numberModa");
    numberModa.innerText="Aparecio un total de "+ moda[1] +" veces";
    console.log(moda[1]);
}

