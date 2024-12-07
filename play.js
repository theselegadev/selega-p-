class selega_po{
    static play(){
        manipulation_choice.show_card()
        manipulation_choice.alter_names()
        manipulation_names.insert_names()
    }
}

class manipulation_choice{
   static card_choices = document.getElementById('card-choices')
   static card_name_player = document.getElementById('card-name-player')
   static background = document.getElementById('background')
   
   static insertChoice(value){
        if(manipulation_choice.card_name_player.innerText == manipulation_names.name_player01){
            localStorage.setItem("choice_player1",value)
        }else{
            localStorage.setItem("choice_player2",value)
            manipulation_choice.card_choices.style.display = "none"
            this.background.style.filter = "blur(0px)"
        }
   }

   static show_card(){
        setTimeout(()=>{
            this.card_choices.style.display = "flex"
        },1000)
   }

   static alter_names(){
        const myinterval = setInterval(()=>{
            if(localStorage.getItem('choice_player1') != null){
                this.card_name_player.innerText = manipulation_names.name_player02
                clearInterval(myinterval)
            }else{
                this.card_name_player.innerText = manipulation_names.name_player01
            }
        },1000)
   }
}

class manipulation_names{
    static name_player01 = localStorage.getItem('name_player1')
    static name_player02 = localStorage.getItem('name_player2')

    static show_player1 = document.getElementById('name-player1')
    static show_player2 = document.getElementById('name-player2')
    
    static insert_names(){
        this.show_player1.innerText = this.name_player01
        this.show_player2.innerText = this.name_player02
    }
}

class manipulation_images{
    static image_choice_player1 = document.getElementById('image-choice-player1')
    static image_choice_player2 = document.getElementById('image-choice-player2')
}

selega_po.play()