
// variaves de todos os inputs 
// ------------------------------------------

let cadastras = document.querySelector('section')

let Adicionar_mais = document.querySelector('#btnm')

let inp1 = document.querySelector('#name')
let inp2 = document.querySelector('#idade')
let inp3 = document.querySelector('#ano')
let inp4 = document.querySelector('#mes')

let inp20 = document.querySelector('#mes')

let display= document.querySelector('table')



// ------------------------------------------


let Adicionar = document.querySelector('#btn')

let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')
let d4 = document.querySelector('#d4')




Adicionar.addEventListener('click', function(){
   
    let name = inp1.value
    let idade = inp2.value
    let ano = inp3.value
    let mes = inp4.value

    
    d1.textContent = name
    d2.textContent = idade
    d3.textContent = ano
    d4.textContent = mes

 


})

Adicionar_mais.addEventListener('click', function (){
    
    display.style.display = 'block'
    cadastras.style.display ='none'



})