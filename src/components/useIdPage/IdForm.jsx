import { useId } from 'react'

const IdForm = () => {
  const nameId = useId() // Genera un ID único para el campo 'name'
  const emailId = useId() // Genera un ID único para el campo 'email'

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Nombre:</label>
        <input id={nameId} type='text' placeholder='Escribe tu nombre' />
      </div>

      <div>
        <label htmlFor={emailId}>Correo electrónico:</label>
        <input id={emailId} type='email' placeholder='Escribe tu correo' />
      </div>
    </form>
  )
}

export default IdForm
