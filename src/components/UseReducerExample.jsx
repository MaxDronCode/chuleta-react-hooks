import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  )
}

export default UseReducerExample
