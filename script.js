let result = document.getElementById('result');

function appendToDisplay(value) {
    // Check if the last character is an operator
    const lastChar = result.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    // Prevent multiple operators in a row
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }
    
    // Prevent multiple decimal points in a number
    if (value === '.' && result.value.split(/[-+*/]/).pop().includes('.')) {
        return;
    }
    
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function calculate() {
    try {
        // Validate the expression
        if (!result.value) return;
        
        // Check for division by zero
        if (result.value.includes('/0')) {
            result.value = 'Error: Division by zero';
            return;
        }
        
        // Evaluate the expression
        const answer = eval(result.value);
        
        // Format the result
        if (Number.isInteger(answer)) {
            result.value = answer;
        } else {
            result.value = Number(answer.toFixed(8));
        }
    } catch (error) {
        result.value = 'Error';
    }
} 