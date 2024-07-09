import { TNotification } from '@/types'
import { customFetch } from '@/utils/customFetch'

const BASE_URL = import.meta.env['VITE_API_BASE_URL']

async function fetchNotifications(
  notification: string,
  signal: AbortSignal
): Promise<[] | TNotification[]> {
  const url = `${BASE_URL}/search?q=${notification}`
  return customFetch(url, 'Failed to Notifications Data', signal)
}

export { fetchNotifications }
