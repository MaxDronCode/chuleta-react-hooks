import Nav from '../Nav'
import UseReducerExample from './UseReducerExample'

const UseReducer = () => {
  return (
    <div>
      <Nav />
      <h1>UseReducer</h1>
      <section>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <strong>El hook useReducer se usa para manejar un estado complejo en componentes de React.</strong>
          </li>
          <li>
            Recibe tres parámetros:
            <ul style={{ color: '#747bff', listStyle: 'none' }}>
              <li>
                Un reducer, que es una función que determina cómo cambiará el estado.
              </li>
              <li>
                El estado inicial.
              </li>
              <li>
                Una función de inicialización opcional.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        <img src='/src/assets/UseReducerDiagram.png' alt='Use Reducer example diagram' style={{ height: '400px', width: 'auto', borderRadius: '8px' }} />
        <img src='/src/assets/UseReducer.png' alt='UseReducer example photo' style={{ height: '600px', width: 'auto', borderRadius: '8px' }} />
      </section>
      <section>
        <h1>Ejemplo</h1>
        <UseReducerExample />
      </section>
    </div>
  )
}

export default UseReducer
