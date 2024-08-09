// add function
const add = (...arr) => {
    let total = null;
    arr.forEach((element) => {
        total += (element)
    })
    return total
}
// subtract function
const subtract = (...arr) => {
    let total = arr.reduce((first,second) => {
        return (first - second)
    })
    return total
}

// divide function
const divide  = (...arr) => {
    let total = arr.reduce((first,second) => {
        return (first / second).toFixed(4)
    })
    return total
}

// multiply function
const multiply  = (...arr) => {
    let total = arr.reduce((first,second) => {
        return (first * second)
    })
    return total
}

let firstNum ; 
let operator  = '';
let secondNum ;
let result ;

// operate function , that evaluate two values with the operator
const operate = (firstNum, operator, secondNum) => {
    
    switch (operator) {
        case "+":
            result = add(firstNum, secondNum)
            return result
            break;
        case "-":
            result = subtract(firstNum, secondNum)
            return result
            break;
        case "/":
            result = divide(firstNum, secondNum)
            return  result
            break;
        case "*":
            result = multiply(firstNum, secondNum)
            return result
            break;
    
        default:
            return "ERROR"
            break;
    }
}


const number = document.querySelectorAll('.number')
const display = document.querySelector('#input')
const clear = document.querySelector('#clear')
const sign = document.querySelectorAll('.operate')
const equal = document.querySelector('#equalTo')
let answer = document.querySelector('#result')

let firstOperand = '';
let secondOperand = '';
number.forEach(element => {
    element.addEventListener('click', () => {
        display.textContent += element.id;
        if (operator != ''){
            secondOperand += element.id
            secondNum = Number(secondOperand)
        }
        else if (operator == '' ) {
            firstOperand += element.id
            firstNum = Number(firstOperand)
        }
      
    })
})


sign.forEach(element => {
    element.addEventListener('click', () => {
        if (typeof(result) != 'undefined'){
            operate(firstNum,operator,secondNum);
            firstNum = result
            secondOperand = ''
            secondNum = ''
            display.textContent = firstNum
        }
        else if (typeof(result) == 'undefined' && typeof(secondNum) != 'undefined'){
            operate(firstNum,operator,secondNum);
            firstNum = result
            secondOperand = ''
            secondNum = ''
            display.textContent = firstNum
        }
        display.textContent += ' ' + element.textContent + ' '
        operator = element.id 
         
    })
})

equal.addEventListener('click', () => {
    if (typeof(secondNum) != 'undefined'){
        operate(firstNum,operator,secondNum)
        answer.textContent = result;
    }
    else{
        alert('please input second operand')
    }
    
})


clear.addEventListener('click', () => {
    display.textContent = ''
    firstNum = ''
    secondNum = undefined
    operator = ''
    firstOperand = ''
    secondOperand = ''
    answer.textContent = ''
    result = undefined;
});