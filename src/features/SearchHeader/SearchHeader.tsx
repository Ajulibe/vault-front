import ComboBox from '@/components/ComboBox/ComboBox'
import type { ISearchHeader } from '@/types'
import Notification from '@/constants/notifications'
import styles from './SearchHeader.module.scss'
import { useMemo } from 'react'

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
        placeholder="search for a notification type"
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
