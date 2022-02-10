const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;

    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=parseInt(inputDiscount.value)

    const inputCoupon=document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;
    let descuento;
    

    if (!coupons.includes(couponValue)) {
       if(discountValue!=0){
          descuento=discountValue;
          const textP=document.getElementById("TextP");
          textP.innerText="Tu cupon no fue valido";
       }else 
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15+ discountValue;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30+ discountValue;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25 + discountValue;
     }
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }