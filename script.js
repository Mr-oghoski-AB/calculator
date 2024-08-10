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
        if (second == 0){
            return 'lmao ;)'
        }else{
            return (first / second).toFixed(4)
        }
        
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

// percentage 
const percent = (num) => {
    let total = num/100
        return total
}

let firstNum ; 
let operator  = '';
let secondNum  ;
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
const point = document.querySelector('.piont')
const backSpace = document.querySelector('#back')
const percentage = document.querySelector('#percentage')
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

point.addEventListener('click', () => {
    if (!firstOperand.includes('.')){
        firstOperand += point.id
        display.textContent += point.id
    }
    else if (!secondOperand.includes('.')){
        secondOperand += point.id
        display.textContent += point.id
    }
})

sign.forEach(element => {
    element.addEventListener('click', () => {
        if (firstNum == undefined){
            firstNum = 0
        }
        if (typeof(result) != 'undefined'){
            operate(firstNum,operator,secondNum);
            firstNum = result
            let string = result
            firstOperand = string.toString()
            secondOperand = ''
            secondNum = ''
            display.textContent = firstNum
        }
        else if (typeof(result) == 'undefined' && typeof(secondNum) != 'undefined'){
            operate(firstNum,operator,secondNum);
            firstNum = result
            let string = result
            firstOperand = string.toString()
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

percentage.addEventListener('click' , () => {
    if (firstNum != undefined && secondNum != undefined){
        operate(firstNum,operator,secondNum)
        let num = result
        result = percent(num)
        answer.textContent = result
        
    }
    else if (firstNum != undefined && secondNum == undefined){
        let num = firstNum
        answer.textContent = percent(num)
        result = percent(num)
    }
    else if (answer.textContent != ''){
        let num = firstNum
        result = percent(num)
    }
    

})

backSpace.addEventListener('click' , () => {
    if (typeof(secondNum) == 'undefined' && operator == ''){
        let word = firstOperand.split('')
        word.pop()
        firstOperand = word.join('')
        display.textContent = firstOperand
        firstNum = Number(firstOperand)
        result = undefined
        answer.textContent = ''
        if (firstNum == 0){
            firstNum = ''
        }

    }

    else if (operator != '' && typeof(secondNum) == 'undefined' ){
        operator = ''
        display.textContent = firstOperand
    }

    else if (typeof(firstNum) != 'undefined' && operator != ''){
        let word = secondOperand.split('')
        word.pop()
        secondOperand = word.join('')
        display.textContent = firstOperand + ' ' + operator + ' ' + secondOperand;
        secondNum = Number(secondOperand)
        result = undefined
        answer.textContent = ''
        if (secondNum == 0){
            secondNum = undefined
        }
    }
})

clear.addEventListener('click', () => {
    display.textContent = ''
    firstNum = undefined
    secondNum = undefined
    operator = ''
    firstOperand = ''
    secondOperand = ''
    answer.textContent = ''
    result = undefined;
});