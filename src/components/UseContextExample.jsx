import React, { useContext } from 'react'
import { ThemeContext } from './UseContext'
import './UseContextExample.css'

const UseContextExample = () => {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2>Componente hijo</h2>
      <p>El botón de abajo está tomando su estilo del valor de contexto: "{theme}".</p>
      <button className={theme}>
        Botón con tema {theme}
      </button>
    </div>
  )
}

export default UseContextExample
