import { TEvent, TEventType } from '@/types'

import CopyableCode from '../CopyableCode/CopyableCode'
import Pill from '../Pill/Pill'
import React from 'react'
import clsx from 'clsx'
import { copyToClipboard } from '@/utils/copyToClipboard'
import styles from './Table.module.scss'
import { toast } from 'react-toastify'

interface ITableProps {
  rows: TEvent[]
}

export const EventLabels: { [key in TEventType]: string } = {
  TRANSACTION_SENT: 'Transactions sent',
  TRANSACTION_RECEIVED: 'Transactions received',
  ACCOUNT_CREATED: 'Account created'
}

const currencyMapping: { [key: string]: string } = {
  bitcoin: 'BTC',
  ethereum: 'ETH'
}

const Table: React.FC<ITableProps> = ({ rows }) => {
  const notify = () => toast('Copied to clipboard')

  const handleCopyData = (info: string) => {
    copyToClipboard(info, notify)
  }

  const formatData = (event: TEvent): React.ReactNode => {
    switch (event.type) {
      case 'TRANSACTION_SENT':
        return (
          <span className={styles.eventDescription}>
            <CopyableCode text={event.data.from} onCopy={handleCopyData} />
            <span className={styles.actionText}>sent</span>
            <span className={styles.sentAmount}>
              <b>
                {event.data.amount}
                {event.data.unit}
              </b>
            </span>
            <span className={styles.actionText}>to</span>
            <CopyableCode text={event.data.to} onCopy={handleCopyData} />
          </span>
        )
      case 'TRANSACTION_RECEIVED':
        return (
          <span className={styles.eventDescription}>
            <CopyableCode text={event.data.to} onCopy={handleCopyData} />
            <span className={styles.actionText}>received</span>
            <span className={styles.receivedAmount}>
              <b>
                {event.data.amount}
                {event.data.unit}
              </b>
            </span>
            <span className={styles.actionText}>from</span>
            <CopyableCode text={event.data.from} onCopy={handleCopyData} />
          </span>
        )
      case 'ACCOUNT_CREATED':
        const currency = currencyMapping[event.data.currency.toLowerCase()] || event.data.currency
        return (
          <span>
            {currency} Account {event.data.name} created
          </span>
        )
      default:
        return ''
    }
  }

  return (
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
          rows.map((row) => (
            <tr
              key={row.id}
              className={clsx(styles.dataRow, {
                [styles.receivedRow as string]: row.type === 'TRANSACTION_RECEIVED',
                [styles.sentRow as string]: row.type === 'TRANSACTION_SENT',
                [styles.createdRow as string]: row.type === 'ACCOUNT_CREATED'
              })}
            >
              <td>{row.id}</td>
              <td>{formatData(row)}</td>
              <td>
                <Pill text={EventLabels[row.type]} eventType={row.type} /> &nbsp;
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Table
