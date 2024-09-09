import { useState, useMemo } from 'react'

const expensiveCalculation = (num) => {
  for (let i = 0; i < 5000; i++) {
    console.log(i)
  }
  return num * 2
}

const WithUseMemo = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const memoizedResult = useMemo(() => expensiveCalculation(count), [count])

  return (
    <div>
      <p>Resultado del cálculo costoso (con useMemo): {memoizedResult}</p>
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

export default WithUseMemo
