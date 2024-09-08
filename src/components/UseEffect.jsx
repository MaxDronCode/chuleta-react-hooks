import React from 'react'
import Nav from './Nav'
import UseEffectExample from './UseEffectExample'

const UseEffect = () => {
  return (
    <div>
      <Nav />
      <h1>UseEffect</h1>
      <section>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <strong>El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.</strong>
          </li>
          <li>
            Recibe dos parámetros:
            <ul style={{ color: '#747bff', listStyle: 'none' }}>
              <li>
                La función que se ejecutará al cambiar las dependencias o al renderizar el componente.
              </li>
              <li>
                Un array de dependencias. Si cambia el valor de alguna dependencia, ejecutará la función.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <img src='/src/assets/UseEffect.png' alt='UseEffect exmple photo' style={{ height: '400px', width: 'auto' }} />
      </section>
      <section>
        <h1>Ejemplo</h1>
        <UseEffectExample />
      </section>
    </div>
  )
}

export default UseEffect
