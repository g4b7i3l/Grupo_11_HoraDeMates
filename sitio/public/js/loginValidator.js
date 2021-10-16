const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('login esta conectado')
    $('email').addEventListener('blur') ,() =>{
        if(!$('email').value){
            $('email').classList.add('is-invalid')
        }
        else{
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
        }
        }

const formLogin = $('form-login');
 
formLogin.addEventListener('submit' , e =>{
    e.preventDefault();


    })
})

