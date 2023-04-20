function calculator(number1, number2, operator) {
    let result;
    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        result = number1 - number2;
    } else if (operator === '*') {
        result = number1 * number2;
    } else if (operator === '/') {
        result = number1 / number2;
    }
    else if (['+','-','*','/'].includes(operator) === false){
        throw new RangeError
    }
    return result;
}

try {
    calculator(3,9,'%')
}
catch (e){
    if (e instanceof RangeError){
        console.log("The operator must be an '+' '-' '*' '/' ")
    }
}