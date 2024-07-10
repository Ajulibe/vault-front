import { TNotification } from '@/types'
import { customFetch } from '@/utils/customFetch'

const BASE_URL = import.meta.env['VITE_API_BASE_URL']

async function fetchNotifications(notification: string): Promise<[] | TNotification[]> {
  const url = `${BASE_URL}/search?q=${notification}`
  return customFetch(url, 'Failed to Notifications Data')
}

export { fetchNotifications }
