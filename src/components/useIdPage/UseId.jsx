import Nav from '../Nav.jsx'
import IdForm from './IdForm.jsx'

const UseId = () => {
  return (
    <div>
      <Nav />
      <h1>useId</h1>
      <section>
        <p><strong>El hook `useId` genera identificadores únicos y consistentes que se pueden utilizar en cualquier parte de la aplicación.</strong></p>
        <p><strong style={{ color: 'red' }}>Antes de useId()</strong> creabamos ids de manera manual, lo cual puede dar lugar a <strong style={{ color: 'red' }}>errores o duplicados.</strong></p>
        <p><strong style={{ color: '#747bff' }}>Con useId()</strong> React garantiza que los identificadores sean siempre <strong style={{ color: '#747bff' }}>únicos y consistentes</strong> dentro de una aplicación.</p>
        <p>Una de las <strong style={{ color: 'green' }}>principales ventajas</strong> de useId es que asegura que los identificadores sean <strong style={{ color: 'green' }}>consistentes entre el cliente y el servidor</strong> (si usas server-side rendering), lo que evita problemas de desajustes entre ambos.</p>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          A continuación, un ejemplo donde se usan identificadores generados por `useId` para asociar etiquetas con campos de formulario.
        </p>
      </section>
      <h3>Explicación</h3>
      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <article>
          <h4>Identificadores únicos y consistentes</h4>
          <img src='/src/assets/useId1.png' alt='explicación' style={{ borderRadius: '8px' }} />
        </article>
        <article>
          <IdForm />

        </article>
      </section>

    </div>
  )
}

export default UseId
