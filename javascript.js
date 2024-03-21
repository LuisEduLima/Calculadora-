var btns = document.querySelectorAll('button')
var pad = document.querySelector('input')

var firstValue = ''
var secondValue =''
var atualValue = 1

var answer = 0

var atualSign = ''

function UpdatePad(value){
    pad.value = value
}

function UpdateValues(number){
    if(atualValue == 1){
        firstValue +=number
        UpdatePad(firstValue)
    }
    else if(atualValue == 2){
        secondValue+= number
        UpdatePad(secondValue)
    }

}

function clearAll(){
    firstValue = ''
    secondValue = ''
    UpdatePad(0)
    atualValue = 1
}

function clearAtualValue(){
    if(atualValue == 1){
        firstValue = ''
        UpdatePad(0)
    }
    else if(atualValue == 2){
        secondValue= ''
        UpdatePad(firstValue)
    }
}

function operation(){
    let n1 = parseFloat(firstValue)
    let n2 = parseFloat(secondValue)
    switch(atualSign){
        case '+':
            answer = n1+n2
            
            break
        case '-':
            answer = n1-n2
            break
        case 'x':
            answer = n1*n2
            break
        case '/':
            answer = n1/n2
            break
    }

    UpdatePad(answer)
    firstValue = answer
    secondValue = 0
    atualValue = 1
}

for(var i = 0; btns.length; i++){

    btns[i].addEventListener('click',(t)=>{

        if(!t.target.classList.contains('black')){
            
            let n = t.target.innerHTML
            
            UpdateValues(n)

        }else if(t.target.classList.contains('black')){
            
            let type = t.target.classList

            if(type.contains('clearAll')){
                
                clearAll()
            }

            if(type.contains('clearLastDigit')){
               
                clearAtualValue()
            }

            if(type.contains('equals')){
               if(secondValue != '')
                operation()
            }

            if(type.contains('division')||type.contains('times')||type.contains('plus')|| type.contains('minus')){
                atualSign = t.target.innerHTML

        
                if(atualValue == 1){
                    atualValue = 2
                }

           
            }
        }
       
    })
}