import WithoutUseMemo from './WithoutUseMemo.jsx'
import WithUseMemo from './WithUseMemo.jsx'
import Nav from '../Nav.jsx'
const UseMemo = () => {
  return (
    <div>
      <Nav />
      <h1>UseMemo</h1>
      <section>
        <strong>El hook `useMemo` permite memorizar cálculos costosos para evitar que se ejecuten en cada renderización.</strong>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          Aquí hay dos ejemplos para ilustrar la diferencia de rendimiento entre usar y no usar `useMemo`.
        </p>
      </section>

      <section>
        <h2>Ejemplo sin `useMemo` (con problemas de rendimiento)</h2>
        <WithoutUseMemo />

        <h2>Ejemplo con `useMemo` (rendimiento optimizado)</h2>
        <WithUseMemo />
      </section>
      <section>
        <h3>Explicación</h3>
        <h4>Problemas de rendimiento</h4>
        <img src='/src/assets/useMemo1.png' alt='desc' style={{ borderRadius: '8px' }} />
        <h4>Rendimiento optimizado</h4>
        <img src='/src/assets/useMemo2.png' alt='desc' style={{ borderRadius: '8px' }} />
      </section>
    </div>
  )
}

export default UseMemo
