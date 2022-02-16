function rangoMediojs(){
    const input=document.getElementById("inputRango")
    const value=input.value.split(',');
    const numbers = value.map((i) => Number(i));
    numbers.sort(function(a, b){return a - b});
    console.log(numbers);
    const menor=numbers[0];
    const mayor=numbers[numbers.length-1];
    const resultado= (menor+mayor)/2;
    console.log(resultado);
    const impresion=document.getElementById("rangoMedioResultado");
    impresion.innerText="El rango medio es de "+resultado;
}