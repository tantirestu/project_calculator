
language="JavaScript"
let result= document.getElementById('screen')
const display =(a)=>{
    if (a == 'clear'){
        result.value= ' '
    } else if (a == 'del'){
        result.value=result.value.slice(0,-1)
    } else if(a == 'action'){
        try {
           result.value= eval(result.value) 
        } catch (error) {
            alert('error')
        }
    } else {
        result.value += a
    }
}
        