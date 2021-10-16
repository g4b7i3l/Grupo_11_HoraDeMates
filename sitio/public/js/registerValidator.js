const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('login esta conectado')
    $('email').addEventListener('blur') ,() =>{
        if(!$('email').value){
            $('email').classList.add('is-invalid')
        }
        else{
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
        }
        }

const formRegistro = $('form-register');
 
formLogin.addEventListener('submit' , e =>{
    e.preventDefault();


    })
})

