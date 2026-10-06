import { useEffect, useState } from 'react'

function getPrimaryLabel(item) {
  return item.displayName || item.name || item.title || item.username || item.activityType || item._id
}

export default function ResourceList({ title, loadItems }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isCurrent = true

    loadItems()
      .then((data) => {
        if (!isCurrent) return
        setItems(Array.isArray(data) ? data : [])
        setStatus('ready')
      })
      .catch(() => {
        if (!isCurrent) return
        setStatus('error')
      })

    return () => {
      isCurrent = false
    }
  }, [loadItems])

  return (
    <main className="resource-view">
      <header>
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>{title}</h1>
      </header>
      {status === 'loading' && <p>Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p>Unable to load {title.toLowerCase()}.</p>}
      {status === 'ready' && (
        <ul className="resource-list">
          {items.map((item) => (
            <li key={item._id || getPrimaryLabel(item)}>{getPrimaryLabel(item)}</li>
          ))}
        </ul>
      )}
    </main>
  )
}