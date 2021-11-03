

const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('login esta conectado')

    const formLogin = $('form-login');

    $('mail').addEventListener('blur' , () => {
        if(!$('mail').value.trim()){
            $('mail').classList.add('is-invalid')
            $('error-email').innerHTML = 'El email es obligatorio'
        }else {
         $('mail').classList.remove('is-invalid')
         $('mail').classList.add('is-valid')
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
    

 
 formLogin.addEventListener('submit' , e =>{
    e.preventDefault();
    let elementos = formLogin.elements 
    let error = false
    for (let index = 0; index < elementos.length -2 ; index++) {
       if(elementos[index].classList.contains('is-invalid')|| elementos[index].value == "" ){
           error = true
           if(elementos[index].value == ""){
               elementos[index].classList.add('is-invalid')
               errorEmpty.innerHTML = 'Los campos indicados son obligatorios'
     
           }
       }
        
    }
    !error && formLogin.submit()
        
    
   console.log(error)
       }) 
})

