    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        // let result = multiply(num1, num2);
                        let result = calculateOperations(num1, num2);
    
                        // Display the result
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
                function calculateOperations(a, b) {
                    debugger; // Optional: Use this for debugging in dev tools
                
                    let sum = a + b;
                    let product = a * b;
                    let division = b !== 0 ? (a / b).toFixed(2) : 'Division by zero not allowed';
                
                    return {
                        sum,
                        product,
                        division
                    };
                }
                
                function displayResult(result) {
                    const resultElement = document.getElementById('result');
                
                    if (typeof result === 'string') {
                        resultElement.textContent = result;
                    } else {
                        resultElement.innerHTML = `
                            <strong>Results:</strong><br>
                            Addition: ${result.sum} <br>
                            Multiplication: ${result.product} <br>
                            Division: ${result.division}
                        `;
                    }
                }
                  

            
                // function multiply(a, b) {
                //     // Introduce a debugger statement to pause execution
                //     debugger;
    
                //     // Multiply the numbers
                //     return a * b;
                // }
    
                // function displayResult(result) {
                //     const resultElement = document.getElementById('result');
                //     resultElement.textContent = `The result is: ${result}`;
                // }
            