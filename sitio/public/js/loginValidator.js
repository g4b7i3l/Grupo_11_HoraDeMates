const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('login esta conectado')

    const formLogin = $('form-login');

    $('email').addEventListener('blur' , () => {
        if(!$('email').value.trim()){
            $('email').classList.add('is-invalid')
            $('error-email').innerHTML = 'El email es obligatorio'
        }else {
         $('email').classList.remove('is-invalid')
         $('email').classList.add('is-valid')
         $('error-email').innerHTML = null
        }
    })

    $('password').addEventListener('blur' , () => {
        if(!$('password').value.trim()){
            $('password').classList.add('is-invalid')
            $('error-password').innerHTML = 'La contraseña es obligatoria'
        }else {
         $('password').classList.remove('is-invalid')
         $('password').classList.add('is-valid')
         $('error-password').innerHTML = null
        }
    })
    

 
/* formLogin.addEventListener('submit' , e =>{
    e.preventDefault();


    }) */
})

