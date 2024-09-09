import React, { useState, useCallback } from 'react'

// Componente hijo que solo se re-renderiza cuando es necesario
const Button = React.memo(({ onIncrement }) => {
  console.log('Botón renderizado (con useCallback)')
  return <button onClick={onIncrement}>Incrementar</button>
})

const WithUseCallback = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // Función memorizada que solo se recrea si `count` cambia
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [count])

  return (
    <div>
      <div style={{ border: '2px solid #333', borderRadius: '8px', padding: '10px', margin: '10px auto', width: '50%' }}>
        <p style={{ fontWeight: 'bold' }}>Componente Hijo</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button onIncrement={increment} /><br />
          <p>Contador: {count}</p>
        </div>
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

export default WithUseCallback
