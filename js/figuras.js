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

    //Añadimos función de altura del triangulo isosceles
    function AlturaTrianguloIso(lado1,lado2,base){
        if(lado1!=lado2){
            alert("No es isosceles");
            return "Ingresa valores validos";
        }
        else{
        return Math.sqrt((lado1*lado2)-(base*base)/4);
    }}
    //Aqui interactuamos con el HTML en el cuadrado
    function calcularPerimetroCuadrado(){
        const input= document.getElementById("InputCuadrado");
        const value=input.value;

        const perimetro=perimetroCuadrado(value);
        const impresion=document.getElementById("resultadoCuadradoPerimetro");
        impresion.innerText="El perimetro es de "+perimetro;
    }
    
    function calcularAreaCuadrado(){
        const input= document.getElementById("InputCuadrado");
        const value=input.value;

        const area=areaCuadrado(value);
        const impresion=document.getElementById("resultadoCuadradoArea");
        impresion.innerText="El area es de "+area;
    }
    //Aca interactuamos con el HTML en el triangulo
    function calcularPerimetroTriangulo(){
        const input1=document.getElementById("InputTriangulo1");
        const value1=Number(input1.value);

        const input2=document.getElementById("InputTriangulo2");
        const value2=Number(input2.value);

        const input3=document.getElementById("InputTriangulo3");
        const value3=Number(input3.value);

        const perimetro=perimetroTriangulo(value1,value2, value3);
        const impresion=document.getElementById("resultadoTrianguloPerimetro");
        impresion.innerText="El perimetro es de "+perimetro;    
    }
    function calcularAreaTriangulo(){
        const input1=document.getElementById("InputTriangulo3");
        const value1=input1.value;

        const input2=document.getElementById("InputTriangulo4");
        const value2=input2.value;

        const area=areaTriangulo(value1,value2);
        const impresion=document.getElementById("resultadoTrianguloArea");
        impresion.innerText="El area es de "+area;
        }
    //Interaccion con el HTML en el circulo
    function calcularDiametroCirculo(){
        const input=document.getElementById("InputCirculo");
        const value=input.value;

        const diametro=diametroCirculo(value);
        const impresion=document.getElementById("resultadoCirculoDiametro");
        impresion.innerText="El diametro es de "+diametro;
        }
    function calcularCircunferenciaCirculo(){
        const input=document.getElementById("InputCirculo");
        const value=input.value;

        const circunferencia=perimetroCirculo(value);
        const impresion=document.getElementById("resultadoCirculoCircunferencia");
        impresion.innerText="La circunferencia es de "+circunferencia;
    }
    function calcularAreaCirculo(){
        const input=document.getElementById("InputCirculo");
        const value=input.value;

        const area=areaCirculo(value);
        const impresion=document.getElementById("resultadoCirculoArea");
        impresion.innerText="El area es de "+area;
    }
    function calcularAlturaTrianguloIso(){
        const input1=document.getElementById("InputLado1");
        const value1=input1.value;

        const input2=document.getElementById("InputLado2");
        const value2=input2.value;

        const input3=document.getElementById("InputBaseIso");
        const value3=input3.value;

        const altura=AlturaTrianguloIso(value1,value2,value3);
        const impresion=document.getElementById("resultadoTrianguloIso");
        impresion.innerText="La altura es de "+altura;
    }