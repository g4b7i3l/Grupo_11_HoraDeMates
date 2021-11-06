let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('contact-form esta conectado')

    const contactValidator = $('form-contact');



contactValidator.addEventListener('submit' , e =>{
    e.preventDefault();
 let elementos = contactValidator.elements 
 let error = false
 for (let index = 0; index < elementos.length -1 ; index++) {
    if(elementos[index].classList.contains('is-invalid')|| elementos[index].value == "" ){
        error = true
        if(elementos[index].value == ""){
            elementos[index].classList.add('is-invalid')
            errorEmpty.innerHTML = 'Los campos indicados son obligatorios'
        }
    }
     
 }
 !error && contactValidator.submit()
     
 
console.log(error)
}) 
 

})

