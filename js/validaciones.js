/*const NameField= document.querySelector("[name=nombre]");
const emailField= document.querySelector("[name=correo]");
const asuntoField= document.querySelector("[name=asunto]");
const mensajeField= document.querySelector("[name=mensaje]");

const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    if(fieldValue.trim().length == 0){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
      //  field.nextElementSibling.innerText= message;
    }else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
      //  field.nextElementSibling.innerText= message;
    }

}
NameField.addEventListener("blur",  validateEmptyField);
emailField.addEventListener("blur",  validateEmptyField);
asuntoField.addEventListener("blur",  validateEmptyField);
mensajeFieldField.addEventListener("blur", (e) => validateEmptyField); */

window.addEventListener('load', () => {

  const formulario = document.querySelector('#formulario');
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');

  //const inputs = document.querySelectorAll('#formulario input');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarCampos();
   
  });

  const validarCampos = () => {
    
    //captura los valores ingresados por el usuario
    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();
    const asuntoValor = asunto.value.trim();
    const mensajeValor = mensaje.value.trim();

    //validacion del campo nombre
    if (!nombreValor) {
     // console.log('campo vacio');

      validacionFallo(nombre, 'Campo Vacío')

    } else if(nombreValor.length < 5){
      validacionFallo(nombre, 'Nombre demasiado corto (minimo 5 caracteres');

    } else if (nombreValor.length > 50) {
      //console.log('Nombre demasiado largo');
      validacionFallo(nombre, 'Nombre demasiado largo (máximo 50 caracteres');
    } else if (!/^[a-zA-Z\s]*$/.test(nombreValor)) {
      //console.log('nombre Invalido');
      validacionFallo(nombre, 'Nombre Inválido(sólo se permiten letras y espacios)');
    } else {
      validacionOk(nombre);
    }

    //validacion del campo correo
    if (!correoValor) {

      validacionFallo(correo, 'Campo vacío');

    } else if (!validacionCorreo(correoValor)) {
      validacionFallo(correo, 'El correo no es valido');

    } else {
      validacionOk(correo);
    }

    //validar el campo asunto
    if (!asuntoValor) {
     // console.log('campo vacio');
      validacionFallo(asunto, 'Campo Vacío')

    } else if (asuntoValor.length > 50) {
     // console.log('Nombre demasiado largo');
      validacionFallo(asunto, 'Nombre demasiado largo (máximo 50 caracteres');

    } else if (!/^[a-zA-Z\s]*$/.test(asuntoValor)) {
     // console.log('nombre Invalido');
      validacionFallo(asunto, 'Asunto Inválido(sólo se permiten letras y espacios)');
    } else {
      validacionOk(asunto);
    }

    //validar el campo mensaje
    if (!mensajeValor) {
     // console.log('campo vacio');
      validacionFallo(mensaje, 'Campo Vacío')

    } else if (mensajeValor.length > 300) {
     // console.log('Nombre demasiado largo');
      validacionFallo(mensaje, 'El mensaje demasiado largo (máximo 300 caracteres');

    } else {
      validacionOk(mensaje);
    }

    //limpiar los valores
  /*  if(nombreValor && correoValor && asuntoValor && mensajeValor) {
      nombre.value= "";
      correo.value= "";
      asunto.value= "";
      mensaje.value= "";
    } */

    if (
      nombre.parentElement.classList.contains('ok') &&
      correo.parentElement.classList.contains('ok') &&
      asunto.parentElement.classList.contains('ok') &&
      mensaje.parentElement.classList.contains('ok')
    ) {
      formulario.reset();
    } 


  }

  const validacionFallo = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector('p');
    aviso.innerText = msje;

    formControl.className = 'form-control falla';

  }

  const validacionOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control ok';

  }

  const validacionCorreo = (correo) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);

  }



});



/*const expresiones = {
  nombre: /^[a-zA-zÁ-ÿ\s]{1,50}$/,
  correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  asunto:  /^[a-zA-zÁ-ÿ\s]{1,50}$/,
  mensaje: /^[a-zA-zÁ-ÿ\s]{1,300}$/
}

const validarFormulario = (e) => {
  switch(e.target.name){

    case "nombre":
      if(expresiones.nombre.test(e.target.value)){
        document.getElementById('nombre').classList.remove('nombre_incorrecto');
        document.getElementById('nombre').classList.remove('nombre_correcto');
      }else {
        document.getElementById('nombre').classList.add('nombre_incorrecto');
      }

    break;

    case "correo":

    break;

    case "asunto":

    break;

    case "mensaje":

    break;


  } 
}
inputs.forEach((input) => {

  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

    e.preventDefault;


}); */