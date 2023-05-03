let tpt, nom, nh, saln, bon, ded, sal 

tpt=prompt('Ingrese el tipo de trabajador que es (Fijo o Temporal)')

if(tpt=fijo) {
    nom=prompt('ingrese su nombre')
    nh=Number(prompt('Ingrese el numero de horas trabajadas'))
    sal=Number(prompt('Ingrese su salario basico por hora'))
    ded=Number(prompt('Ingrese sus deducciones'))
    bon=Number(prompt('Ingrese sus bonificaciones'))

    saln= sal*nh+bon-ded
    alert(nom+ 'Tiene un salaruio neto de' +saln)
} else if(tpt=temporal) {
    nom=prompt('Ingrese su nombre')
    nh=Number(prompt('Ingrese el numero de horas trabajadas'))

    saln= 6000*nh
    alert(nom+ 'Tiene un salario neto de' +saln)
}