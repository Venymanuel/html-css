
const firt_login = document.querySelector('.login')
const secound_login = document.querySelector('.logout')

let iemail = document.querySelector('#iemail')
let ipassword = document.querySelector('#ipassword')


let button_have = document.querySelector('#button-have')
let isend = document.querySelector('#isend')
let new_a = document.querySelector('#new')

new_a.addEventListener('click', (e)=>{

    firt_login.classList.add('none')
    firt_login.classList.remove('block')

    secound_login.classList.add('block')
    secound_login.classList.remove('logout')
    secound_login.classList.remove('none')


    e.preventDefault()
})

button_have.addEventListener('click', (e)=>{
    
    secound_login.classList.add('logout')
    secound_login.classList.add('none')
    secound_login.classList.remove('block')
 

    firt_login.classList.add('block')
    firt_login.classList.remove('none')

    e.preventDefault()
})