import React, { useState } from 'react'

const Button = ({ onIncrement }) => {
  console.log('Botón renderizado (sin useCallback)')
  return <button onClick={onIncrement}>Incrementar</button>
}

const WithoutUseCallback = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // Función que se recrea en cada renderizado
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onIncrement={increment} /><br />
        <p>Contador: {count}</p>
      </div>

      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Escribe algo...'
      />
      <p>Texto: {text}</p>
    </div>
  )
}

export default WithoutUseCallback
