//Escojo los eementos HTML con los que quiero trabajar
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#formulario');

//Seusa addeventlistener para mandar funcion javascript al boton (evento, funcion), la funcion 
//se llama sin parentesis
form.addEventListener('submit', sumarInputValues);
// btn.addEventListener('click', btnOnClick);

//Ahora escuchamos los eventos de html
//funcion del boton calcular
// function btnOnClick(){
//    const sumaInputs = input1.value + input2.value;
//    //inertext para que se visualice en pantalla
//    pResult.innerText =  "Resultado: " + sumaInputs;
// }

//funcion de envío del formulario, el addeventlister envía como argumento un evento
function sumarInputValues(event){
    //se llama la propiedad del eveneto, para que no se recargue la pagina dado que el formulario
    //por defecto toma el ultimo boton como submit, por eso se recarga
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    //inertext para que se visualice en pantalla
    pResult.innerText =  "Resultado: " + sumaInputs;
 }

 //se podría trabajar con el mismoe evento de click,pero en el codigo html habria que colocar 
 //por defecto al boton de calcular type="button", para que no lo tome como type = "submit" y 
 //recargue la pagina