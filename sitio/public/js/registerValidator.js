let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



const $ = id  => document.getElementById(id)

window.addEventListener("load" , () => {
    console.log('register esta conectado')


const formRegistro = $('form-register');

$('nombre').addEventListener('blur', () => {
    if(!$('nombre').value.trim()){
        $('nombre').classList.add('is-invalid')
        $('error-nombre').innerHTML = 'El nombre es obligatorio'
    }else {
     $('nombre').classList.remove('is-invalid')
     $('nombre').classList.add('is-valid')
     $('error-nombre').innerHTML = null
    }
})

$('nombreId').addEventListener('blur', () => {
    if(!$('nombreId').value.trim()){
        $('nombreId').classList.add('is-invalid')
        $('error-nombreId').innerHTML = 'El nombre de ID es obligatorio'
    }else {
     $('nombreId').classList.remove('is-invalid')
     $('nombreId').classList.add('is-valid')
     $('error-nombreId').innerHTML = null
    }
})
$('password').addEventListener('focus', () => {
    $('error-password').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, un número y una mayúscula"

})

$('password').addEventListener('blur', () => {
    if(!regExPass.test($('password').value)){
        $('password').classList.add('is-invalid')
        $('error-password').innerHTML = "La contraseña debe cumplir con estándares"
    }else{
        $('password').classList.remove('is-invalid')
        $('password').classList.add('is-valid')
        $('error-password').innerHTML = null
    }
})

$('email').addEventListener('blur', () => {
    if(!regExEmail.test($('email').value)){
        $('email').classList.add('is-invalid')
        $('error-email').innerHTML = "Debes ingresar un email válido"
    }else{
        $('email').classList.remove('is-invalid')
        $('email').classList.add('is-valid')
        $('error-email').innerHTML = null
    }
})

/* formRegistro.addEventListener('submit' , e =>{
    e.preventDefault();


    }) */
 

})

