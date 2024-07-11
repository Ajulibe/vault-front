import { TNotificationType } from '@/types'

export const EventLabels: { [key in TNotificationType]: string } = {
  TRANSACTION_SENT: 'Transactions sent',
  TRANSACTION_RECEIVED: 'Transactions received',
  ACCOUNT_CREATED: 'Account created'
}
