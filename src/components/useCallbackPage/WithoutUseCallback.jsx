import { useState } from 'react'

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

export default WithoutUseCallback
