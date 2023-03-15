alert('Traductor de 10 colores en inglés')
let color = prompt('Ingrese uno de estos diez colores (sin usar tildes) para traducir al inglés: Rojo, Naranja, Amarillo, Azul, Gris, Marron, Negro, Blanco, Violeta, Verde')
let colorMayuscula = color.toLocaleUpperCase();
switch (colorMayuscula) {
  case 'ROJO':
    alert('Red');
    break;
  case 'NARANJA':
    alert('Orange');
    break;
  case 'AMARILLO':
    alert('Yellow');
    break;
  case 'AZUL':
    alert('Blue');
    break;
  case 'GRIS':
    alert('Grey');
    break;
  case 'MARRON':
    alert('Brown');
    break;
  case 'NEGRO':
    alert('Black');
    break;
  case 'BLANCO':
    alert('White');
    break;
  case 'VIOLETA':
    alert('Violet');
    break;
  case 'VERDE':
    alert('Green');
    break;
  default:
    alert(color +' no está en la lista de colores disponibles para el traductor');
}