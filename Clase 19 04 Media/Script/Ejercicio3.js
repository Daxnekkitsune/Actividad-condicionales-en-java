let nom1, nom2, sal1, sal2, ded1, ded2, bon1, bon2, saln1, saln2

nom1= parseInt(prompt('Ingrese su nombre' ))
nom2= parseInt(prompt('Ingrese su nombre' ))
sal1= parseInt(prompt('Ingrese el salñario de '+nom1))
sal2= parseInt(prompt('Ingrese el salñario de '+nom2))
ded1= parseInt(prompt('Ingrese sus deducciones '+nom1))
ded2= parseInt(prompt('Ingrese sus deducciones '+nom2))
bon1= parseInt(prompt('Ingrese sus bonificaciones '+nom1))
bon2= parseInt(prompt('Ingrese sus bonificaciones '+nom2))

saln1= sal1-ded1+bon1
saln2= sal2-ded2+bon2

if(saln1>saln2){} 
