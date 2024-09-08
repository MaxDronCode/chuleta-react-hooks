import React, { useState, useEffect } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Cargando usuarios...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul style={{ width: '40%', margin: 'auto' }}>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UserList
