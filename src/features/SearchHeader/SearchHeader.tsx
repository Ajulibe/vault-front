import ComboBox from '@/components/ComboBox/ComboBox'
import { TSearchNotifications } from '@/types'
import styles from './SearchHeader.module.scss'
import { useMemo } from 'react'

export const Notification: TSearchNotifications = [
  { name: 'All Notification', value: '' },
  { name: 'Transactions sent', value: 'TRANSACTION_SENT' },
  { name: 'Transactions received', value: 'TRANSACTION_RECEIVED' },
  { name: 'Account created', value: 'ACCOUNT_CREATED' }
]
interface ISearchHeader {
  handleInputChange: (notification: string) => void
}

const SearchHeader = ({ handleInputChange }: ISearchHeader) => {
  const comboOptions = useMemo(
    () =>
      Notification.map((notifications, index) => ({
        ...notifications,
        id: `${notifications.value}${index}`
      })),
    []
  )

  return (
    <div className={styles.searchHeaderWrapper}>
      <ComboBox
        items={comboOptions}
        placeholder="Search or select a notification type"
        onChange={handleInputChange}
      />
      <small className={styles.searchGuide}>
        Tip: You can search for notifications by typing keywords like
        <span className={styles.sent}>"sent"</span>,
        <span className={styles.received}>"received"</span>, or
        <span className={styles.created}>"created"</span>.
      </small>
    </div>
  )
}

export default SearchHeader
