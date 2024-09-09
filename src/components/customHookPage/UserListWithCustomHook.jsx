import useFetchUsers from './useFetchUsers'

const UserList = () => {
  const { users, loading, error } = useFetchUsers()

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
