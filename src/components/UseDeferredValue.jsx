import React from 'react'
import Nav from './Nav.jsx'
import DeferredSearch from './DeferredSearch'

const UseDeferredValue = () => {
  return (
    <div>
      <Nav />
      <h1>useDeferredValue</h1>
      <section>
        <p><strong>El hook `useDeferredValue` permite posponer una actualización costosa para evitar que la UI se bloquee.</strong></p>
        <p>Cuando usas useDeferredValue, el valor de una variable se retrasa para que las actualizaciones más importantes puedan ocurrir antes.</p>
        <p><strong>Diferencia con useTransition():</strong></p>
        <ul>
          <li>
            <strong>useTransition:</strong> Se usa para ejecutar una serie de actualizaciones de estado no urgentes.
          </li>
          <li>
            <strong>useDeferredValue:</strong> Se utiliza para posponer la actualización de un valor específico que puede ser computacionalmente costoso.
          </li>
        </ul>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          A continuación, un ejemplo donde el filtrado de una lista grande se retrasa con `useDeferredValue` para que la entrada de texto sea fluida.
        </p>
      </section>

      <h3>Explicación</h3>
      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start' }}>
        <article>
          <DeferredSearch />
        </article>
        <article>
          <img src='/src/assets/useDeferredValue1.png' alt='explicación' style={{ borderRadius: '8px' }} />
        </article>
      </section>

    </div>
  )
}

export default UseDeferredValue
