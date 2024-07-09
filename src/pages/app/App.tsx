import { TNotification, TSearchNotifications } from '@/types'
import { useCallback, useEffect, useRef, useState } from 'react'

import TableDisplayView from '@/features/tabledisplay/tabledisplay'
import TextField from '@/components/TextField/TextField'
import debounce from 'lodash/debounce'
import { fetchNotifications } from '@/services'
import { mapInputToNotificationType } from '@/utils/mapInputToNotificationType'
import styles from './App.module.scss'

export const Notification: TSearchNotifications = [
  { name: 'All Notification', value: '' },
  { name: 'Transactions sent', value: 'TRANSACTION_SENT' },
  { name: 'Transactions received', value: 'TRANSACTION_RECEIVED' },
  { name: 'Account created', value: 'ACCOUNT_CREATED' }
]

const App = () => {
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<[] | TNotification[]>([])
  const debounceDelay = useRef(300)
  const activeRequests = useRef(0)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchNotificationData = useCallback(async (notification: string) => {
    activeRequests.current += 1
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()

    setLoading(true)
    try {
      const data = await fetchNotifications(notification, abortControllerRef.current.signal)
      setResults(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      activeRequests.current -= 1
      if (activeRequests.current === 0) {
        setLoading(false)
      }
    }
  }, [])

  const debouncedFetchNotificationData = useRef(
    debounce((notification: string) => {
      fetchNotificationData(notification)
    }, debounceDelay.current)
  ).current

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const mappedValue = mapInputToNotificationType(inputValue)
    debouncedFetchNotificationData(mappedValue)
  }

  useEffect(() => {
    fetchNotificationData('')

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [fetchNotificationData])

  return (
    <div className={styles.app}>
      <div className={styles.textFieldWrapper}>
        <TextField onChange={handleInputChange} placeholder="Search by notification type" />
        <small className={styles.searchGuide}>
          Tip: You can search for notifications by typing words like
          <span className={styles.sent}>"sent"</span>,
          <span className={styles.received}>"received"</span>, or
          <span className={styles.created}>"created"</span>.
        </small>
      </div>
      <TableDisplayView isLoading={isLoading} data={results} />
    </div>
  )
}

export default App
