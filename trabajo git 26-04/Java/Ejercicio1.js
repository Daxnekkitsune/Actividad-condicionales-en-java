let eh1, eh2, nomh1, nomh2;
//Leer o asignar informacion
eh1= number(prompt('Ingrese la edda del hermano 1'))
eh2= number(prompt('Ingrese la edda del hermano 2'))
nomh1= prompt('Ingrese el nombre del hermano 1')
nomh2= prompt('Ingrese el nombre del hermano 2')
//proceso
if(eh1>eh2){
    alert('El hermano mayor es '+ nomh1)
}else{
    alert('El hermano mayor es '+ nomh2)
}