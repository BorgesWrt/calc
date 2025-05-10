  // Генерация плавающих символов
  const symbols = ['+', '-', '×', '÷', '=', '%', '√', 'π', 'x²', '()'];
  const floatingSymbols = document.getElementById('floatingSymbols');

  for (let i = 0; i < 30; i++) {
      const symbol = document.createElement('div');
      symbol.className = 'symbol';
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.left = `${Math.random() * 100}%`;
      symbol.style.top = `${Math.random() * 100}%`;
      symbol.style.animationDuration = `${10 + Math.random() * 20}s`;
      symbol.style.animationDelay = `${Math.random() * 5}s`;
      floatingSymbols.appendChild(symbol);
  }

  // Логика калькулятора
  let currentDisplay = '0';

  function updateDisplay() {
      document.getElementById('display').textContent = currentDisplay;
  }

  function appendToDisplay(value) {
      if (currentDisplay === '0' && value !== '.') {
          currentDisplay = value;
      } else {
          currentDisplay += value;
      }
      updateDisplay();
  }

  function clearDisplay() {
      currentDisplay = '0';
      updateDisplay();
  }

  function calculate() {
      try {
          // Заменяем "×" и "÷" на "*" и "/" для вычисления
          let expression = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/');
          currentDisplay = eval(expression).toString();
          updateDisplay();
      } catch (error) {
          currentDisplay = 'Error';
          updateDisplay();
          setTimeout(clearDisplay, 1000);
      }
  }