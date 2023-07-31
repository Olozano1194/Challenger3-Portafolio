/*const btnEnviar = document.querySelector('.btn');
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

    //validar lo del boton
    let camposValidos = true;

    //validacion del campo nombre
    if (!nombreValor) {
      validacionFallo(nombre, 'Campo Vacío')
      camposValidos = false;

    } else if(nombreValor.length < 5){
      validacionFallo(nombre, 'Nombre demasiado corto (minimo 5 caracteres)');
      camposValidos = false;

    } else if (nombreValor.length > 50) {
      validacionFallo(nombre, 'Nombre demasiado largo (máximo 50 caracteres)');
      camposValidos = false;

    } else if (!/^[a-zA-Z\s]*$/.test(nombreValor)) {
      validacionFallo(nombre, 'Nombre Inválido(sólo se permiten letras y espacios)');
      camposValidos = false;

    } else {
      validacionOk(nombre);
    }

    //validacion del campo correo
    if (!correoValor) {
      validacionFallo(correo, 'Campo vacío');
      camposValidos = false;

    } else if (!validacionCorreo(correoValor)) {
      validacionFallo(correo, 'El correo no es valido');
      camposValidos = false;

    } else {
      validacionOk(correo);
    }

    //validar el campo asunto
    if (!asuntoValor) {
     // console.log('campo vacio');
      validacionFallo(asunto, 'Campo Vacío')

    } else if (asuntoValor.length > 50) {
     // console.log('Nombre demasiado largo');
      validacionFallo(asunto, 'Nombre demasiado largo (máximo 50 caracteres)');

    } else if (!/^[a-zA-Z\s]*$/.test(asuntoValor)) {
     // console.log('nombre Invalido');
      validacionFallo(asunto, 'Asunto Inválido(sólo se permiten letras y espacios)');
    } else {
      validacionOk(asunto);
    }

    //validar el campo mensaje
    if (!mensajeValor) {
     
      validacionFallo(mensaje, 'Campo Vacío');
      camposValidos = false;

    } else if (mensajeValor.length > 300) {
      validacionFallo(mensaje, 'El mensaje demasiado largo (máximo 300 caracteres)');
      camposValidos = false;

    } else {
      validacionOk(mensaje);
    }

    //Habolitar o desabilitar el botón de envio segun los campos sean validos
    btnEnviar.disabled = !camposValidos;

    //si los campos son validos, habilitar el boton de encio
    if (camposValidos) {
      formulario.reset();
      location.reload();
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



}); */

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.querySelector('.btn')

// formulario.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // validarCampos();

// });

btnEnviar.disabled = true;


//validación cantidad de caracteres mensaje
const validateMessageField = (e) => {
  const field = e.target;
  const fieldValue = field.value;
  if (fieldValue.trim().length > 10) {
    fieldValue.classList.add('falla');
    fieldValue.nextElementSibling.classList.add('error');
    fieldValue.nextElementSibling.innerText = `${nombre} demasiado largo (máximo 50 caracteres)`;
    
  }else {
    validateEmptyField;
  }
}
//validaciones para los inputs y textarea
const validateEmptyField = (e) => {
  const field = e.target;
  const fieldValue = e.target.value;

  if (fieldValue.trim().length === 0) {
    field.classList.add('falla');
    field.nextElementSibling.classList.add('error');
    field.nextElementSibling.innerText = `${field.name} requerido`;
    btnEnviar.disabled = true;
    
  }else {
    field.classList.remove('falla')
    field.nextElementSibling.classList.remove('error');
    field.nextElementSibling.innerText = '';
    btnEnviar.disabled = false;

  }

}

//validacion para el correo
const validateEmailFormat = (e) => {
  const field = e.target;
  const fieldValue = field.value.trim();
  const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  if (fieldValue.length > 0 && !regex.test(fieldValue)) {
    
    field.classList.add('falla')
    field.nextElementSibling.classList.add('error');
    field.nextElementSibling.innerText = `please enter a valid email`;
    btnEnviar.disabled = true;
  }else {
    field.classList.remove('falla');
    field.nextElementSibling.classList.remove('error');
    field.nextElementSibling.innerText = '';
    btnEnviar.disabled = false;
  }
  

}

nombre.addEventListener('blur', validateEmptyField);
correo.addEventListener('blur', validateEmptyField);
asunto.addEventListener('blur', validateEmptyField);
mensaje.addEventListener('blur', validateEmptyField);

correo.addEventListener('input', validateEmailFormat);
mensaje.addEventListener('input', validateMessageField);