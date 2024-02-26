import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');
  const [answer, setAnswer] = useState('');

  const handleNumberClick2 = (num) => {
    if (number2 === '0') {
      setNumber2(num.toString());
    } else {
      setNumber2((prevNumber) => prevNumber + num);
    }
    }

  const handleNumberClick = (num) => {
    if (number1 === '0') {
      setNumber1(num.toString());
    } else {
      setNumber1((prevNumber) => prevNumber + num);
    }
  };

  const handleBackArrowClick = () => {
      setNumber1((prevNumber) => prevNumber.slice(0, -1));   
  };
  const handleBackArrowClick2 = () => {
    setNumber2((prevNumber) => prevNumber.slice(0, -1));
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleClearClick = () => {
    setNumber1('');
    setNumber2('');
    setOperation('');
    setAnswer('');
  };

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2) && operation) {
      switch (operation) {
        case '+':
          setAnswer(num1 + num2);
          break;
        case '-':
          setAnswer(num1 - num2);
          break;
        case '*':
          setAnswer(num1 * num2);
          break;
        case '/':
          setAnswer(num1 / num2);
          break;
        default:
          setAnswer('Invalid operation');
      }
    } else {
      setAnswer('Invalid input');
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
          <button onClick={handleBackArrowClick}>&larr;</button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {['+', '-', '*', '/'].map((op) => (
            <button key={op} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberClick2(num)}>
              {num}
            </button>
          ))}
          <button onClick={handleBackArrowClick2}>&larr;</button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
