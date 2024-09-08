import React from 'react'
import Nav from './Nav.jsx'
import UserList from './UserListWithCustomHook.jsx'

const UseCustomHook = () => {
  return (
    <div>
      <Nav />
      <h1>Custom Hook</h1>
      <section>
        <strong>Un custom hook encapsula lógica repetitiva (como el uso de `useState` y `useEffect`) en una función reutilizable.</strong>
        <p style={{ color: '#747bff', fontWeight: 'bold' }}>
          A continuación, un ejemplo de un custom hook que hace un fetch a una API de usuarios y encapsula la lógica en un hook reutilizable.
        </p>
      </section>

      <section>
        <UserList />
      </section>

      <section>
        <h3>Explicación</h3>
        <h4>Solución SIN el Custom Hook</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src='/src/assets/customHook1.png' alt='explicación' style={{ borderRadius: '8px' }} />
          <ul>
            <li>
              El componente tiene <strong style={{ color: 'red' }}>mucha lógica</strong> relacionada con el estado y el efecto, lo que lo hace más <strong style={{ color: 'red' }}>difícil de leer y mantener.</strong>
            </li>
            <li>
              Toda la lógica del fetch está dentro del mismo componente, lo que hace que este componente se encargue de <strong style={{ color: 'red' }}>demasiadas responsabilidades</strong> (fetching de datos, manejo de errores, estado de carga, y renderizado de la UI).
            </li>
          </ul>
        </div>
        <h4>Solución CON el Custom Hook</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
          <img src='/src/assets/customHook2.png' alt='explicación' style={{ borderRadius: '8px', width: '50%', height: 'auto' }} />
          <img src='/src/assets/customHook3.png' alt='explicación' style={{ borderRadius: '8px', width: '50%', height: 'auto' }} />
        </div>
        <ul style={{ listStyle: 'none' }}>
          <li>
            La lógica del fetch se mueve a un custom <strong style={{ color: '#747bff' }}>hook reutilizable</strong> llamado useFetchUsers, lo que deja al componente UserList más limpio y enfocado solo en el renderizado de la UI.
          </li>
          <li>
            Ahora, si necesitas esta misma lógica en otro componente, simplemente reutilizas el custom hook sin duplicar código.
          </li>
        </ul>
        <h4>Es decir:</h4>
        <ul style={{ margin: 'auto', width: '30%', color: '#747bff', fontWeight: 'bold' }}>
          <li>
            Reutilización
          </li>
          <li>
            Separación de responsabilidades
          </li>
          <li>
            Mantenimiento
          </li>
        </ul>
      </section>
    </div>
  )
}

export default UseCustomHook
