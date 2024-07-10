import { TNotification, TNotificationType } from '@/types'

import NotificationData from './NotificationData'
import Pill from '../Pill/Pill'
import clsx from 'clsx'
import styles from './Table.module.scss'

interface ITableProps {
  rows: TNotification[]
}

export const EventLabels: { [key in TNotificationType]: string } = {
  TRANSACTION_SENT: 'Transactions sent',
  TRANSACTION_RECEIVED: 'Transactions received',
  ACCOUNT_CREATED: 'Account created'
}

const Table = ({ rows }: ITableProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th> ℹ Details</th>
            <th> 📢 Notifications</th>
          </tr>
        </thead>
        <tbody>
          {rows.length &&
            rows.map((notification) => (
              <tr
                key={notification.id}
                className={clsx({
                  [styles.receivedRow as string]: notification.type === 'TRANSACTION_RECEIVED',
                  [styles.sentRow as string]: notification.type === 'TRANSACTION_SENT',
                  [styles.createdRow as string]: notification.type === 'ACCOUNT_CREATED'
                })}
              >
                <td>{notification.id}</td>
                <td>
                  <NotificationData notification={notification} />
                </td>
                <td>
                  <Pill text={EventLabels[notification.type]} eventType={notification.type} />{' '}
                  &nbsp;
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
