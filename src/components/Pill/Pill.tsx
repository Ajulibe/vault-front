import { ENotificationColors } from '@/constants/notificationColors'
import type { PillProps } from '@/types'
import { rgbaToRgb } from '@/utils/rgbaToRgb'
import styles from './Pill.module.scss'

const Pill = ({ text, eventType }: PillProps) => {
  const color = ENotificationColors[eventType]
  const lightColor = rgbaToRgb(color, 0.1)
  const dotColor = rgbaToRgb(color, 0.6)

  return (
    <span className={styles.pill} style={{ backgroundColor: lightColor, color }} data-testid="pill">
      <div className={styles.dot} style={{ backgroundColor: dotColor }}></div>
      <div>{text}</div>
    </span>
  )
}

export default Pill
