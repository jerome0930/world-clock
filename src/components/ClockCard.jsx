import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Trash2 } from 'lucide-react'
import '../styles/ClockCard.css'

dayjs.extend(utc)
dayjs.extend(timezone)

function ClockCard({ timezone: tz, name, color, onRemove }) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [offset, setOffset] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = dayjs().tz(tz)
      setTime(now.format('HH:mm:ss'))
      setDate(now.format('dddd, MMMM D, YYYY'))
      const offsetHours = now.format('Z')
      setOffset(`UTC${offsetHours}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [tz])

  const handleRemoveClick = (e) => {
    e.preventDefault()
    onRemove()
  }

  return (
    <div className="clock-card" style={{ borderTopColor: color }}>
      <div className="clock-header">
        <div>
          <h2 className="clock-city-name">{name}</h2>
          <p className="clock-timezone">{tz}</p>
        </div>
        <button
          className="remove-btn"
          onClick={handleRemoveClick}
          title="Remove timezone"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="clock-display">
        <div className="digital-time" style={{ color }}>
          {time}
        </div>
        <div className="time-period">
          {dayjs().tz(tz).format('A')}
        </div>
      </div>

      <div className="clock-info">
        <p className="clock-date">{date}</p>
        <p className="clock-offset">{offset}</p>
      </div>

      <div className="clock-analog">
        <svg viewBox="0 0 100 100" className="analog-clock">
          {/* Clock circle */}
          <circle cx="50" cy="50" r="48" className="clock-face" />
          
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180)
            const x1 = 50 + 40 * Math.sin(angle)
            const y1 = 50 - 40 * Math.cos(angle)
            const x2 = 50 + 45 * Math.sin(angle)
            const y2 = 50 - 45 * Math.cos(angle)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="hour-marker"
              />
            )
          })}
          
          {/* Center dot */}
          <circle cx="50" cy="50" r="2" className="clock-center" />
        </svg>
        <AnalogHands timezone={tz} />
      </div>
    </div>
  )
}

function AnalogHands({ timezone: tz }) {
  const [hands, setHands] = useState({ hour: 0, minute: 0, second: 0 })

  useEffect(() => {
    const updateHands = () => {
      const now = dayjs().tz(tz)
      const hours = now.hour()
      const minutes = now.minute()
      const seconds = now.second()

      const secondDegrees = (seconds / 60) * 360
      const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6
      const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30

      setHands({
        hour: hourDegrees,
        minute: minuteDegrees,
        second: secondDegrees,
      })
    }

    updateHands()
    const interval = setInterval(updateHands, 1000)

    return () => clearInterval(interval)
  }, [tz])

  return (
    <svg viewBox="0 0 100 100" className="analog-hands">
      {/* Hour hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="20"
        className="hand hour-hand"
        style={{ transform: `rotate(${hands.hour}deg)`, transformOrigin: '50px 50px' }}
      />
      {/* Minute hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="15"
        className="hand minute-hand"
        style={{ transform: `rotate(${hands.minute}deg)`, transformOrigin: '50px 50px' }}
      />
      {/* Second hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="10"
        className="hand second-hand"
        style={{ transform: `rotate(${hands.second}deg)`, transformOrigin: '50px 50px' }}
      />
    </svg>
  )
}

export default ClockCard
