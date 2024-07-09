import { NotificationColors } from '@/types'
import React from 'react'
import styles from './Pill.module.scss'

interface PillProps {
  text: string
  eventType: keyof typeof NotificationColors
}

const rgbaToRgb = (rgba: string, alpha: number): string => {
  const [r, g, b] = rgba.match(/\d+/g)!.map(Number)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const Pill: React.FC<PillProps> = ({ text, eventType }) => {
  const color = NotificationColors[eventType]
  const lightColor = rgbaToRgb(color, 0.1)
  const dotColor = rgbaToRgb(color, 0.6)

  return (
    <span className={styles.pill} style={{ backgroundColor: lightColor, color }}>
      <div className={styles.dot} style={{ backgroundColor: dotColor }}></div>
      <div>{text}</div>
    </span>
  )
}

export default Pill
