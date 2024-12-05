const card_rules = document.getElementById('card-rules')
const btn_close = document.getElementById('btn-close')
const btn_rules = document.getElementById('btn-rules')

btn_rules.addEventListener('click',()=>{
    card_rules.style.top = "30%"
})

btn_close.addEventListener('click',()=>{
    card_rules.style.top = "-50%"
})

setTimeout(()=>{
    card_rules.style.top = "30%"
},1300)