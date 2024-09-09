import { createContext, useState } from 'react'
import Nav from '../Nav'
import UseContextExample from './UseContextExample'

export const ThemeContext = createContext()

const UseContext = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Nav />
      <h1>UseContext</h1>
      <section>
        <strong>El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.</strong>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>Para crear un contexto en React usamos el hook createContext:</p>
        <img src='/src/assets/useContext1.png' alt='UseContext example photo' style={{ height: '200px', width: '100%' }} />
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>Para usar el contexto, debemos envolver el árbol de componentes con el componente Provider:</p>
        <img src='/src/assets/useContext2.png' alt='UseContext example photo' style={{ height: '200px', width: '100%' }} />
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>Para consumir el contexto, debemos usar el hook useContext:</p>
        <img src='/src/assets/useContext3.png' alt='UseContext example photo' style={{ height: '300px', width: '100%' }} />
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }} />
      <section>
        <h1>Ejemplo</h1>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          Haz clic en el botón para alternar entre los temas 'dark' y 'light'.
        </p>
        <button onClick={toggleTheme}>
          Cambiar tema (Actual: {theme})
        </button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', border: '2px solid #555', borderRadius: '8px', padding: '20px', width: '60%', margin: '30px auto' }}>
        <UseContextExample />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <h2>Explicación</h2>
        <h3>Componente Padre:</h3>
        <img src='/src/assets/useContext4.png' alt='desc' style={{ borderRadius: '8px', width: '50%', height: 'auto' }} />
        ...
        <img src='/src/assets/useContext5.png' alt='desc' style={{ borderRadius: '8px' }} />
        <h3>Componente Hijo:</h3>
        <img src='/src/assets/useContext6.png' alt='desc' style={{ borderRadius: '8px' }} />
      </section>
    </ThemeContext.Provider>
  )
}

export default UseContext
