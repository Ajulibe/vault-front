import { NotificationColors } from '@/types'
import React from 'react'
import { rgbaToRgb } from '@/utils/rgbaToRgb'
import styles from './Pill.module.scss'

interface PillProps {
  text: string
  eventType: keyof typeof NotificationColors
}

const Pill: React.FC<PillProps> = ({ text, eventType }) => {
  const color = NotificationColors[eventType]
  const lightColor = rgbaToRgb(color, 0.1)
  const dotColor = rgbaToRgb(color, 0.6)

  return (
    <span className={styles.pill} style={{ backgroundColor: lightColor, color }} data-testId="pill">
      <div className={styles.dot} style={{ backgroundColor: dotColor }}></div>
      <div>{text}</div>
    </span>
  )
}

export default Pill
