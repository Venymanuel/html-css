


let button = document.querySelector('#mais')
const CAIXA = document.querySelector('.auto-cadastrar')

let nome = document.querySelector('#inome').value
let turma = document.querySelector('#iturma').value
let periodo = document.querySelector('#iperiodo').value
let classe  = document.querySelector('#iclass').value

let dados = [nome, turma, periodo, classe]
console.log(dados)

function add(){

    dados.map((element, id)=>{
       
        let new_elemt = document.createElement('td')
        new_elemt.setAttribute('id', 'c'+id)
        new_elemt.innerHTML = element
        
    })
   

    CAIXA.appendChild(tr)
}

button.addEventListener('click', ()=>{
    let tr = document.createElement('tr')
    tr.appendChild(add())
 
    console.log(CAIXA)
})

