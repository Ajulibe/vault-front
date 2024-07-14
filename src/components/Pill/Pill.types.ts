import { ENotificationColors } from '@/constants/notificationColors'

export interface PillProps {
  text: string
  eventType: keyof typeof ENotificationColors
}
