import React, { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'
import '../styles/AddTimezoneModal.css'

const TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Anchorage',
  'Pacific/Honolulu',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Moscow',
  'Asia/Dubai',
  'Asia/Kolkata',
  'Asia/Bangkok',
  'Asia/Singapore',
  'Asia/Hong_Kong',
  'Asia/Shanghai',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Australia/Melbourne',
  'Pacific/Auckland',
]

const COLORS = [
  '#667eea',
  '#764ba2',
  '#f093fb',
  '#4facfe',
  '#00f2fe',
  '#43e97b',
  '#fa709a',
  '#feca57',
  '#ff9800',
  '#e74c3c',
]

function AddTimezoneModal({ onAdd, onClose }) {
  const [cityName, setCityName] = useState('')
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York')
  const [selectedColor, setSelectedColor] = useState('#667eea')
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false)
  const [showColorDropdown, setShowColorDropdown] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cityName.trim()) {
      onAdd(cityName, selectedTimezone, selectedColor)
      setCityName('')
      setSelectedTimezone('America/New_York')
      setSelectedColor('#667eea')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Timezone</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="city-name">City Name</label>
            <input
              id="city-name"
              type="text"
              placeholder="e.g., Berlin"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Timezone</label>
            <div className="custom-dropdown">
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
              >
                {selectedTimezone}
                <ChevronDown size={18} />
              </button>
              {showTimezoneDropdown && (
                <div className="dropdown-menu">
                  {TIMEZONES.map((tz) => (
                    <button
                      key={tz}
                      type="button"
                      className={`dropdown-item ${selectedTimezone === tz ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedTimezone(tz)
                        setShowTimezoneDropdown(false)
                      }}
                    >
                      {tz}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Color</label>
            <div className="color-picker">
              {COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-option ${selectedColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Timezone
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTimezoneModal
