// plan("Basic")
// function plan (planIngresado){
//     if(planIngresado=="Free"){
//         console.log("Plan basico")
//         return;
//     }else if(planIngresado == "Basic"){
//         console.log("Plan Basic")
//         return;
//     }
// }

const tipoDeSuscripcion = {
    free: 'Solo puedes tomar los crusos gratis',
    basic: 'Solo puedes tomar los cursos durante un mes',
    expert:'Puedes tomar casi todos los cursos',
    expertduo:'tu y yotra persona pueden tomar todos los cursos',
};

conseguirTipoSuscripcion('baasic')

function conseguirTipoSuscripcion (suscripcion){
    if(tipoDeSuscripcion[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion]);
        //agrego un return para que no siga ejecutando mas codigo es como un "break"
        return;
    }else{
        console.log('No existe');
    }
}
