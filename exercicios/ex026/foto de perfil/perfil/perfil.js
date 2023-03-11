
let escolher_fot = document.querySelector('#escolher')

let button = document.querySelector('#atualizar')

let display = document.querySelector('.display')


button.addEventListener('click', ()=>{
   let foto = escolher_fot.value
    
   let new_foto = document.createElement('img')
   new_foto.setAttribute('src', foto)
   display.appendChild(new_foto)
})