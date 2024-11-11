function calculate() {
    const binary1 = document.getElementById("binary1").value;
    const binary2 = document.getElementById("binary2").value;
    const operation = document.getElementById("operation").value;
    const resultDiv = document.getElementById("result");

    // Convert binary inputs to decimal
    const decimal1 = parseInt(binary1, 2);
    const decimal2 = parseInt(binary2, 2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        resultDiv.innerHTML = "Please enter valid binary values.";
        return;
    }

    let result = "";
    let steps = "";

    switch (operation) {
        case "add":
            result = decimal1 + decimal2;
            steps = generateSteps(binary1, binary2, result, "Addition", "+");
            break;
        case "subtract":
            result = decimal1 - decimal2;
            steps = generateSteps(binary1, binary2, result, "Subtraction", "-");
            break;
        case "multiply":
            result = decimal1 * decimal2;
            steps = generateSteps(binary1, binary2, result, "Multiplication", "×");
            break;
        case "divide":
            if (decimal2 === 0) {
                resultDiv.innerHTML = "Division by zero is not allowed.";
                return;
            }

            // Perform binary division (integer division)
            result = Math.floor(decimal1 / decimal2);
            steps = generateSteps(binary1, binary2, result, "Division", "÷");
            break;
        default:
            resultDiv.innerHTML = "Invalid operation.";
            return;
    }

    // Display result and steps
    resultDiv.innerHTML = steps;
}

function generateSteps(bin1, bin2, result, operation, symbol) {
    const length = Math.max(bin1.length, bin2.length);
    const bin1Padded = bin1.padStart(length, '0');
    const bin2Padded = bin2.padStart(length, '0');
    const resultBin = result.toString(2).padStart(length, '0');

    // Formatting steps based on the operation
    return `
        <table class="step-table">
            <tr>
                <td class="step-header">${operation.toUpperCase()}:</td>
                <td class="step-value">${bin1Padded}</td>
                <td class="step-decimal">= ${parseInt(bin1, 2)}</td>
            </tr>
            <tr>
                <td class="step-header">${symbol}</td>
                <td class="step-value">${bin2Padded}</td>
                <td class="step-decimal">= ${parseInt(bin2, 2)}</td>
            </tr>
            <tr>
                <td class="step-header">RESULT:</td>
                <td class="step-value">${resultBin}</td>
                <td class="step-decimal">= ${result}</td>
            </tr>
        </table>
    `;
}

// Date and Time Display
function updateDateTime() {
    const dateTime = new Date();
    const formattedTime = dateTime.toLocaleString();
    document.getElementById("datetime").innerHTML = formattedTime;
}
setInterval(updateDateTime, 1000);
