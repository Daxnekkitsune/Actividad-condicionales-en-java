let edad

edad= parseInt(prompt('Ingrese su edad'))

if(edad<10){
    alert('Con su edad es considerado un niño')
}else if(edad>=10 && edad<15){
alert('Con su edad es considerado un preadolescente') 
} else if(edad>=15 && edad<18){
    alert('Con su edad es considerado un adolescente') 
}else if(edad>=18 && edad<50){
    alert('Con su edad es considerado un adulto') 
}else if(edad>=50){
    alert('Con su edad es considerado un adulto mayor') 
}
