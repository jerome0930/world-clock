import React, { useState } from 'react'
import ClockGrid from './components/ClockGrid'
import AddTimezoneModal from './components/AddTimezoneModal'
import { Plus } from 'lucide-react'
import './styles/App.css'

function App() {
  const defaultTimezones = [
    { id: 1, name: 'New York', timezone: 'America/New_York', color: '#667eea' },
    { id: 2, name: 'London', timezone: 'Europe/London', color: '#764ba2' },
    { id: 3, name: 'Tokyo', timezone: 'Asia/Tokyo', color: '#f093fb' },
    { id: 4, name: 'Sydney', timezone: 'Australia/Sydney', color: '#4facfe' },
  ]

  const [timezones, setTimezones] = useState(defaultTimezones)
  const [showModal, setShowModal] = useState(false)
  const [nextId, setNextId] = useState(5)

  const handleAddTimezone = (name, timezone, color) => {
    const newTimezone = {
      id: nextId,
      name,
      timezone,
      color,
    }
    setTimezones([...timezones, newTimezone])
    setNextId(nextId + 1)
    setShowModal(false)
  }

  const handleRemoveTimezone = (id) => {
    setTimezones(timezones.filter((tz) => tz.id !== id))
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">🌍 World Clock</h1>
        <p className="app-subtitle">Time across the globe</p>
      </div>

      <ClockGrid timezones={timezones} onRemove={handleRemoveTimezone} />

      <button className="add-timezone-btn" onClick={() => setShowModal(true)}>
        <Plus size={24} />
        Add Timezone
      </button>

      {showModal && (
        <AddTimezoneModal
          onAdd={handleAddTimezone}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default App
