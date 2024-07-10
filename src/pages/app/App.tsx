import { TNotification, TSearchNotifications } from '@/types'
import { useCallback, useEffect, useState } from 'react'

import SearchHeader from '@/features/SearchHeader/SearchHeader'
import TableDisplayView from '@/features/TableDisplay/TableDisplay'
import { fetchNotifications } from '@/services'
import styles from './App.module.scss'

export const Notification: TSearchNotifications = [
  { name: 'All Notification', value: '' },
  { name: 'Transactions sent', value: 'TRANSACTION_SENT' },
  { name: 'Transactions received', value: 'TRANSACTION_RECEIVED' },
  { name: 'Account created', value: 'ACCOUNT_CREATED' }
]

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [notificationText, setNotificationText] = useState<string>('')
  const [results, setResults] = useState<[] | TNotification[]>([])

  const fetchNotificationData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetchNotifications(notificationText)
      setResults(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [notificationText])

  const handleInputChange = (notification: string) => {
    setNotificationText(notification)
  }

  useEffect(() => {
    fetchNotificationData()
  }, [fetchNotificationData])

  return (
    <div className={styles.app}>
      <div className={styles.titleText}>Notification Dashboard</div>
      <SearchHeader handleInputChange={handleInputChange} />
      <TableDisplayView isLoading={isLoading} data={results} />
    </div>
  )
}

export default App
