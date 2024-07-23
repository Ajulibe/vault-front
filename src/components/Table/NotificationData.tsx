import CopyableCode from '@/components/CopyableCode/CopyableCode'

import styles from './Table.module.scss'
import { TNotification } from '@/types/sharedTypes'

const currencyMapping: { [key: string]: string } = {
  bitcoin: 'BTC',
  ethereum: 'ETH'
}

interface INotificationDataProps {
  notification: TNotification
}

const NotificationData = ({ notification }: INotificationDataProps) => {
  const renderNotificationInfo = () => {
    switch (notification.type) {
      case 'TRANSACTION_SENT':
        return (
          <span className={styles.eventDescription}>
            <CopyableCode text={notification.data.from} />
            <span className={styles.actionText}>sent</span>
            <span className={styles.sentAmount}>
              <b>
                {notification.data.amount}
                {notification.data.unit}
              </b>
            </span>
            <span className={styles.actionText}>to</span>
            <CopyableCode text={notification.data.to} />
          </span>
        )
      case 'TRANSACTION_RECEIVED':
        return (
          <span className={styles.eventDescription}>
            <CopyableCode text={notification.data.to} />
            <span className={styles.actionText}>received</span>
            <span className={styles.receivedAmount}>
              <b>
                {notification.data.amount}
                {notification.data.unit}
              </b>
            </span>
            <span className={styles.actionText}>from</span>
            <CopyableCode text={notification.data.from} />
          </span>
        )
      case 'ACCOUNT_CREATED': {
        const currency =
          currencyMapping[notification.data.currency.toLowerCase()] ?? notification.data.currency
        return (
          <span>
            {notification.data.name} was created{' '}
            <span className={styles.createdAccount}>
              🎊 <b>{currency}</b>
            </span>
          </span>
        )
      }
      default:
        return <span></span>
    }
  }

  return renderNotificationInfo()
}

export default NotificationData
