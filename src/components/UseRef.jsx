import React from 'react'
import UseRefExample from './UseRefExample'
import Nav from './Nav'

const UseRef = () => {
  return (
    <div>
      <Nav />
      <h1>UseRef</h1>
      <section>
        <strong>El hook `useRef` permite crear una referencia mutable que no provoca renderizaciones.</strong>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>Podemos usar `useRef` para:</p>
        <ul style={{ listStyle: 'none' }}>
          <li><strong>Acceder</strong> directamente a elementos del DOM.</li>
          <li><strong>Almacenar</strong> valores que persisten entre renderizados sin causar actualizaciones.</li>
        </ul>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>Ejemplo:</p>
        <UseRefExample />
        <p>En el ejemplo anterior:</p>
        <ul style={{ listStyle: 'none' }}>
          <li><b>El botón</b> de "Enfocar el input" <b>utiliza una referencia</b> para acceder directamente al campo de texto y poner el foco en él.</li>
          <li>El contador de renderizados usa una referencia para contar cuántas veces se ha renderizado el componente, pero sin causar re-renderizados innecesarios.</li>
        </ul>
      </section>
      <section>
        <h3>Explicación</h3>
        <h4>Acceder:</h4>
        <img src='/src/assets/useRef1.png' alt='desc' style={{ borderRadius: '8px' }} />
        <h4>Almacenar:</h4>
        <img src='/src/assets/useRef2.png' alt='desc' style={{ borderRadius: '8px' }} />
      </section>
    </div>
  )
}

export default UseRef
