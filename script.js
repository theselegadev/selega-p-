import { verify } from "./modules.js"

const card_rules = document.getElementById('card-rules')
const btn_close = document.getElementById('btn-close')
const btn_rules = document.getElementById('btn-rules')
const input_player01 = document.getElementById('player01')
const input_player02 = document.getElementById('player02')
const btn_play = document.getElementById('btn-play')
const button_play = document.getElementById('button-play')

console.log(btn_play)

btn_rules.addEventListener('click',()=>{
    card_rules.style.top = "30%"
})

btn_close.addEventListener('click',()=>{
    card_rules.style.top = "-50%"
})

setTimeout(()=>{
    card_rules.style.top = "30%"
},1300)

const myinterval = setInterval(()=>{
    console.log('setInterval rodando')
    if(verify(input_player01,input_player02)){
        btn_play.style.display = "block"
        clearInterval(myinterval)
    }
},2000)