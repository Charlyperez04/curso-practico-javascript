//Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado*4;
}
perimetroCuadrado()
function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd("Cuadrados");

//Código del triangulo
console.group("Triangulos");
    function perimetroTriangulo(lado1,lado2,base){
        return lado1+lado2+base;
    }

    function areaTriangulo(base,altura){
        return (base*altura)/2;
    }
    console.groupEnd("Triangulos");

    //Código del circulo
    console.group("Círculos");
    
    //Diametro
    function diametroCirculo(radio){
        return radio*2;
    }

    //PI
    const PI=Math.PI;
    console.log("PI es: "+PI);

    //Circunferencia
    function perimetroCirculo(radio){
        const diametro=diametroCirculo(radio);
        return diametro*PI;
    }

    //Área
    function areaCirculo(radio){
        return (radio*radio)*PI;
    }

    console.groupEnd("Círculos");

    //Aqui interactuamos con el HTML en el cuadrado
    function calcularPerimetroCuadrado(){
        const input= document.getElementById("InputCuadrado");
        const value=input.value;

        const perimetro=perimetroCuadrado(value);
        alert("El perimetro es de "+perimetro);
    }
    
    function calcularAreaCuadrado(){
        const input= document.getElementById("InputCuadrado");
        const value=input.value;

        const area=areaCuadrado(value);
        alert("El area es de "+area);
    }
    //Aca interactuamos con el HTML en el triangulo
    function calcularPerimetroTriangulo(){
        const input1=document.getElementById("InputTriangulo1");
        const value1=input1.value;
        const input1n=number(value1);

        const input2=document.getElementById("InputTriangulo2");
        const value2=input2.value;
        const input2n=number(value2);

        const input3=document.getElementById("InputTriangulo3");
        const value3=input3.value;
        const input3n=number(value3);

        const perimetro=perimetroTriangulo(input1n,input2n,input3n);
        alert ("El perimetro es de "+perimetro);
    }
    function calcularAreaTriangulo(){
        const input1=document.getElementById("InputTriangulo3");
        const value1=input1.value;

        const input2=document.getElementById("InputTriangulo4");
        const value2=input2.value;

        const area=areaTriangulo(value1,value2);
        alert("El area es de "+area);
    }