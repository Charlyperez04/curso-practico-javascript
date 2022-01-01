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

    //Aqui interactuamos con el HTML
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