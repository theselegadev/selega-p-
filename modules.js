
export function verify (inp1,inp2){
    if(inp1.value != '' && inp2.value != ''){
        return true
    }else{
        return false
    }
}

export function save_names(inp1,inp2){
    localStorage.clear()
    localStorage.setItem('name_player1',inp1.value)
    localStorage.setItem('name_player2',inp2.value)
}