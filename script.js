// add function
const add = (...arr) => {
    let total = null;
    arr.forEach((element) => {
        total += element
    })
    return total
}
// subtract function
const subtract = (...arr) => {
    let total = arr.reduce((first,second) => {
        return first - second
    })
    return total
}

// divide function
const divide  = (...arr) => {
    let total = arr.reduce((first,second) => {
        return first / second
    })
    return total
}

// multiply function
const multiply  = (...arr) => {
    let total = arr.reduce((first,second) => {
        return first * second
    })
    return total
}

let firstNum ; 
let operator  = null;
let secondNum;

// operate function , that evaluate two values with the operator
const operate = (firstNum, operator, secondNum) => {
    
    switch (operator) {
        case "+":
            return add(firstNum, secondNum)
            break;
        case "-":
            return subtract(firstNum, secondNum)
            break;
        case "/":
            return  divide(firstNum, secondNum)
            break;
        case "*":
            return multiply(firstNum, secondNum)
            break;
    
        default:
            return "ERROR"
            break;
    }
}