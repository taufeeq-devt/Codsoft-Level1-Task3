document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';

  
    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    updateDisplay();
                } catch (error) {
                    currentInput = 'Error';
                    updateDisplay();
                }
            } else if (value === 'C') {
                currentInput = '';
                updateDisplay();
            } else {
                currentInput += value;
                updateDisplay();
            }
        });
    });


    document.addEventListener('keydown', event => {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            currentInput += key;
            updateDisplay();
        } else if (key === 'Enter') {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay();
            } catch (error) {
                currentInput = 'Error';
                updateDisplay();
            }
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    });
});
