//=================Manipulacion del DOM desde javascript=======================

//llamar coigo html desde js
const h1 = document.querySelector('h1');
//clases se seleccionan como en css con un "."
const parrafito = document.querySelector('.parrafito');
//ID se seleccionan como en css con un "#"
const pid = document.querySelector('#pid');
const input = document.querySelector('input')
//selecciona todos los parrafos ('p')
const p = document.querySelectorAll('p')

console.log(input.value)

console.log({
    h1,
    parrafito,
    pid,
    });

//modificar el h1 desde javascript
// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';

//Acceder a un atributo

//agregar una clase
h1.classList.add('rojo');
h1.classList.remove('verde');
console.log(h1.getAttribute('class'));

//modificar el valor de un input desde js
input.value =12345;

//crear un elemento desde javascript en este caso, creamos una imagen
const img = document.createElement('img')
img.setAttribute('src','https://s1.eestatic.com/2017/10/22/actualidad/actualidad_256239333_130044980_1706x960.jpg')
console.log(img);
//le estamos agregando la imagen a la variable paid que corresponde al parrafo(p)
pid.append(img);