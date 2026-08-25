import React from 'react'
import ClockCard from './ClockCard'
import '../styles/ClockGrid.css'

function ClockGrid({ timezones, onRemove }) {
  return (
    <div className="clock-grid">
      {timezones.map((tz) => (
        <ClockCard
          key={tz.id}
          name={tz.name}
          timezone={tz.timezone}
          color={tz.color}
          onRemove={() => onRemove(tz.id)}
        />
      ))}
    </div>
  )
}

export default ClockGrid
