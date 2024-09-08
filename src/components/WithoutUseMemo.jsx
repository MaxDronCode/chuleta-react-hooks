import React, { useState } from 'react'

const expensiveCalculation = (num) => {
  for (let i = 0; i < 5000; i++) {
    console.log(i)
  }
  return num * 2
}

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const result = expensiveCalculation(count)

  return (
    <div>
      <p>Resultado del cálculo costoso: {result}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
      <p>Contador: {count}</p>

      <input
        type='text'
        placeholder='Escribe algo...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Input: {inputValue}</p>
    </div>
  )
}

export default WithoutUseMemo
