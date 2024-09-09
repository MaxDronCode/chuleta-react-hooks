import { useState, useDeferredValue } from 'react'

const generateItems = (num) => {
  const items = []
  for (let i = 0; i < num; i++) {
    items.push(`Item ${i}`)
  }
  return items
}

const DeferredSearch = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const items = generateItems(800000)

  // Filtramos solo cuando `deferredQuery` cambia
  const filteredItems = items.filter((item) =>
    item.includes(deferredQuery)
  )

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Filtrar la lista...'
      />

      <ul>
        {filteredItems.slice(0, 50).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default DeferredSearch
