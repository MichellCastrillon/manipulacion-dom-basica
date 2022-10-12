//Escojo los eementos HTML con los que quiero trabajar
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Ahora escuchamos los eventos de html
//funcion del boton
function btnOnClick(){
   const sumaInputs = input1.value + input2.value;
   //inertext para que se visualice en pantalla
   pResult.innerText =  "Resultado: " + sumaInputs;
}
