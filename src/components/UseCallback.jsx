import WithoutUseCallback from './WithoutUseCallback'
import WithUseCallback from './WithUseCallback'
import Nav from './Nav.jsx'

const UseCallback = () => {
  return (
    <div>
      <Nav />
      <h1>UseCallback</h1>
      <section>
        <p><strong>El hook `useCallback` se utiliza para memorizar una función.</strong></p>
        <p>Esto es útil para evitar que el componente vuelva a crear la función al re-renderizarse.</p>
        <p>En React, cuando un componente se renderiza, vuelve a crear una nueva función cada vez, lo que puede causar problemas de rendimiento por ejemplo si</p>
        <p>pasas esa función como prop a un componente hijo.</p>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          Aquí hay dos ejemplos: uno sin `useCallback` y otro con `useCallback` para optimizar el rendimiento.
        </p>
      </section>

      <section>
        <h2>Ejemplo sin `useCallback` (con problemas de re-renderización)</h2>
        <WithoutUseCallback />

        <h2>Ejemplo con `useCallback` (rendimiento optimizado)</h2>
        <WithUseCallback />
      </section>

      <section>
        <h3>Explicación</h3>
        <h4>Problemas de rendimiento</h4>
        <img src='/src/assets/useCallback1.png' alt='desc' style={{ borderRadius: '8px' }} />
        <h4>Rendimiento optimizado</h4>
        <img src='/src/assets/useCallback2.png' alt='desc' style={{ borderRadius: '8px' }} />
      </section>
    </div>
  )
}

export default UseCallback
