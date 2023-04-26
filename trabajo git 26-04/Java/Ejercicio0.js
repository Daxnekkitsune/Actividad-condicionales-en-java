let cant, des, monto, totalpagar ;

//Leer o asignar informacion
cant=parseInt(prompt('Ingrese la cantidad de productos'))

//Proceso
monto = cant*2000000;

if (cant<10){
alert('No tiene descuento')
} else if(cant>10 && cant<20){
    des= monto*0.1
}else if(cant>=20 && cant <30){
    des= monto*0.2
} else if (cant>=30){
    des = monto*0.4
}

totalpagar = monto-des ;
alert('El total a pagar es: '+ totalpagar)