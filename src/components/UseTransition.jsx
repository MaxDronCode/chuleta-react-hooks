import Nav from './Nav.jsx'
import LargeList from './LargeList'

const UseTransition = () => {
  return (
    <div>
      <Nav />
      <h1>useTransition</h1>
      <section>
        <p><strong>Con el hook `useTransition` podemos diferenciar actualizaciones de estado `prioritarias` y `secundarias`.</strong></p>
        <p>Esto es útil cuando queremos marcar una actualización de estado como no urgente (como cargar una lista grande de datos o aplicar un filtro), para que React pueda priorizar otras tareas más importantes (como escribir en un input).</p>
        <p>Es especialmente útil en interfaces que tienen procesos costosos y pesados, permitiendo una mejor experiencia de usuario.</p>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          A continuación, un ejemplo donde el filtrado de una lista grande es marcado como una tarea no urgente usando `useTransition`.
        </p>
      </section>

      <h3>Explicación</h3>
      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start' }}>
        <article>
          <LargeList />
        </article>
        <article>
          <img src='/src/assets/useTransition1.png' alt='desc' style={{ borderRadius: '8px' }} />
        </article>
      </section>
    </div>
  )
}

export default UseTransition
