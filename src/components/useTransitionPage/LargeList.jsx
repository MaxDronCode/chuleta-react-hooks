import { useState, useTransition } from 'react'

const generateItems = (num) => {
  const items = []
  for (let i = 0; i <= num; i++) {
    items.push(`Item ${i}`)
  }
  return items
}

const LargeList = () => {
  const [query, setQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState(generateItems(200000))
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)

    // Marcamos el filtrado como una actualización no urgente
    startTransition(() => {
      const filtered = generateItems(200000).filter((item) =>
        item.includes(value)
      )
      setFilteredItems(filtered)
    })
  }

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Filtrar la lista...'
      />

      {isPending && <p>Filtrando la lista...</p>}

      <ul>
        {filteredItems.slice(0, 50).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default LargeList
