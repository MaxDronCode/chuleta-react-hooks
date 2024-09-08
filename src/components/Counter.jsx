import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  )
}
