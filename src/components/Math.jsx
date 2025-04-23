import React, { useEffect, useState } from "react";

export default function Math() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

 
    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers.');
      setResult(null);
      return;
    }

    if (operation === 'divide' && number2 === 0) {
      setError('Cannot divide by zero');
      setResult(null);
      return;
    }

  
    let res = 0;
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number1 / number2;
        break;
      default:
        break;
    }

    setResult(res);
  };


  useEffect(() => {
    if (result !== null) {
      console.log('Result:', result);
    }
  }, [result]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 bg-gradient-to-tr from-violet-500 to-white">
      <h1 className="text-2xl font-bold mb-4 text-center">simple Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (−)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-900 transition font-semiblod hover:animate-pulse shadow-2xl"
        >
          Calculate
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result !== null && !error && (
        <p className="mt-4 text-lg font-semibold text-black">
          Result: {result}
        </p>
      )}
    </div>
  );
}