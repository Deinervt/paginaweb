document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    
    // Validar que el primer número esté presente
    if (!num1Input) {
        resultDiv.classList.add('error');
        resultDiv.textContent = 'Error: Ingresa el primer número';
        return;
    }
    
    const num1 = parseFloat(num1Input);
    const num2 = num2Input ? parseFloat(num2Input) : null;
    
    // Validar que el primer número sea válido
    if (isNaN(num1)) {
        resultDiv.classList.add('error');
        resultDiv.textContent = 'Error: El primer número no es válido';
        return;
    }
    
    // Validar el segundo número para operaciones que lo requieren
    if (operation !== 'sqrt' && (!num2Input || isNaN(num2))) {
        resultDiv.classList.add('error');
        resultDiv.textContent = 'Error: Ingresa un segundo número válido';
        return;
    }
    
    let result;
    console.log(`Operación: ${num1} ${operation} ${num2 || ''}`); // Para depuración
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.classList.add('error');
                resultDiv.textContent = 'Error: No se puede dividir por cero';
                return;
            }
            result = num1 / num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case '%':
            if (num2 === 0) {
                resultDiv.classList.add('error');
                resultDiv.textContent = 'Error: No se puede calcular módulo con cero';
                return;
            }
            result = num1 % num2;
            break;
        case 'sqrt':
            if (num1 < 0) {
                resultDiv.classList.add('error');
                resultDiv.textContent = 'Error: No se puede calcular la raíz cuadrada de un número negativo';
                return;
            }
            result = Math.sqrt(num1);
            break;
        default:
            resultDiv.classList.add('error');
            resultDiv.textContent = 'Error: Operación no válida';
            return;
    }
    
    resultDiv.classList.remove('error');
    resultDiv.textContent = `Resultado: ${result.toFixed(2)}`;
});

function resetForm() {
    document.getElementById('calc-form').reset();
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('error');
}