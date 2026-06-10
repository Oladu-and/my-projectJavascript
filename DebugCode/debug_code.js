	
	function performOperation() {
        const input1 = document.getElementById('input1');
        const input2 = document.getElementById('input2');
    
        if (!input1 || !input2) {
            displayResult('Input fields not found');
            return;
        }
    
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
    
        if (Number.isFinite(num1) && Number.isFinite(num2)) {
            const result = multiply(num1, num2);
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    function displayResult(result) {
        const resultElement = document.getElementById('result');
        if (!resultElement) return;
        resultElement.textContent = `The result is: ${result}`;
    }
    