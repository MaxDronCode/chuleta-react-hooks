import React from 'react'
import Nav from './Nav'
import Counter from './Counter'

const UseState = () => {
  return (
    <>
      <Nav />
      <h1>UseState</h1>
      <section>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <strong>SIRVE PARA CREAR VARIABLES DE ESTADO</strong>
          </li>
          <li>
            Su <b>valor</b> es <b>dinámico</b>
          </li>
          <li>
            Al cambiar provoca que el componente se <b>re-renderice</b>
          </li>
        </ul>
      </section>
      <section>
        <img src='/src/assets/UseState.png' style={{ height: '300px', width: 'auto' }} />
      </section>
      <section>
        <h1>Ejemplo</h1>
        <Counter />
      </section>
    </>
  )
}

export default UseState
