let nom, not1, not2, not3, not4, notf

nom=prompt('Ingrese el nombre del estudiante')
not1=Number(prompt('Ingrese la primera nota'))
not2=Number(prompt('Ingrese la primera nota'))
not3=Number(prompt('Ingrese la primera nota'))
not4=Number(prompt('Ingrese la primera nota'))

notf=(not1+not2+not3+not4)/4

if(notf>=3) {
    alert(nom+ 'Tiene como nota definitiva ' +notf+ 'asi gana la materia')
} else if(notf<3) {
    alert(nom+ 'Tiene como nota definitiva' +notf+ 'asi que pierde la materia')
}