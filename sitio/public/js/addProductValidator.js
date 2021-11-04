const $ = id  => document.getElementById(id)

window.addEventListener("load" , () =>{
    console.log('addProduct esta conectado')

    const formAddproduct = $('form-addProduct');

    $('title').addEventListener('blur' , () => {
        if(!$('title').value.trim()){
            $('title').classList.add('is-invalid')
            $('error-title').innerHTML = 'El titulo es obligatorio'
        }else {
         $('title').classList.remove('is-invalid')
         $('title').classList.add('is-valid')
         $('error-title').innerHTML = null
        }
    })

    $('description').addEventListener('blur' , () => {
        if(!$('description').value.trim()){
            $('description').classList.add('is-invalid')
            $('error-description').innerHTML = 'La descripción es obligatoria'
        }else {
         $('description').classList.remove('is-invalid')
         $('description').classList.add('is-valid')
         $('error-description').innerHTML = null
        }
    })
    $('category').addEventListener('blur' , () => {
        if(!$('category').value.trim()){
            $('category').classList.add('is-invalid')
            $('error-category').innerHTML = 'La categoría es obligatoria'
        }else {
         $('category').classList.remove('is-invalid')
         $('category').classList.add('is-valid')
         $('error-category').innerHTML = null
        }
    })
    
   
    $('price').addEventListener('blur' , () => {
        if(!$('price').value.trim()){
            $('price').classList.add('is-invalid')
            $('error-price').innerHTML = 'El precio es obligatorio'
        }else {
         $('price').classList.remove('is-invalid')
         $('price').classList.add('is-valid')
         $('error-price').innerHTML = null
        }
    })
    

    

 
 formAddproduct.addEventListener('submit' , e =>{
    e.preventDefault();
    let elementos = formAddproduct.elements 
    let error = false
    for (let index = 0; index < elementos.length -1 ; index++) {
       if(elementos[index].classList.contains('is-invalid')|| elementos[index].value == "" ){
           error = true
           if(elementos[index].value == ""){
               elementos[index].classList.add('is-invalid')

     
           }
       }
        
    }
    !error && formAddproduct.submit()
        
    
   console.log(error)

    }) 
})