const formulario = document.getElementById('formulario'); /*acceden al id formulario completo que es en html el formulario completo*/
const inputs = document.querySelectorAll('#formulario input'); /*se van almacenar todos los input del dormulario, un arreglo de todos los input */

/*el arreglo que se toma es para ponerle un ever linesting para qeu cada uno de ellos cuando escribamos una letra o un click afuera, se valide o se compare el formulario*/

/*u obj que se llama expresiones y dentro tiene varias propiedad, cada propiedad tiene unas expresiones regulares*/
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//-------------------------se ppodria enviar con esta funcion con un clcik los datos a el backend-------------------

//en este caso cuando se le de click en enviar, se van a validar los datos y luego reiniciar los campos para que queden vacios

inputs.forEach((input) =>{
    input.addEventListener('keyup', ()=>{
        console.log('tecla   ');
    });
})
formulario.addEventListener('submit', (e) =>{ //le da click en el boton enviar para el parametro "e"
    e.preventDefault(); //lo que hace es que se quede quieto, porque para lo contrario se le da click y los daatos se envien y en este caso no se enviaran aun 

} ); 

console.log(object);