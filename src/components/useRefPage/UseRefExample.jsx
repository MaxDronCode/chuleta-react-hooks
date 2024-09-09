import React, { useRef, useState } from 'react'

const UseRefExample = () => {
  const inputRef = useRef(null)
  const renderCount = useRef(0)
  const [value, setValue] = useState('')

  const focusInput = () => {
    inputRef.current.focus()
  }

  // Incrementamos renderCount en cada renderizado
  renderCount.current += 1

  return (
    <div>
      <h2>useRef Example</h2>

      <input
        ref={inputRef}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Escribe algo...'
      />

      <button onClick={focusInput}>
        Enfocar el input
      </button>

      {/* Mostramos cuántas veces ha renderizado el componente */}
      <p>El componente se ha renderizado {renderCount.current} veces.</p>
    </div>
  )
}

export default UseRefExample
