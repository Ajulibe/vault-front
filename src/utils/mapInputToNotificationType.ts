import { TNotificationType } from '@/types'

const notificationMapping: { [key: string]: TNotificationType } = {
  sen: 'TRANSACTION_SENT',
  sent: 'TRANSACTION_SENT',
  send: 'TRANSACTION_SENT',
  rec: 'TRANSACTION_RECEIVED',
  received: 'TRANSACTION_RECEIVED',
  receive: 'TRANSACTION_RECEIVED',
  cre: 'ACCOUNT_CREATED',
  created: 'ACCOUNT_CREATED',
  create: 'ACCOUNT_CREATED',
  acc: 'ACCOUNT_CREATED',
  account: 'ACCOUNT_CREATED'
}

export const mapInputToNotificationType = (input: string): TNotificationType | '' => {
  const lowercasedInput = input.toLowerCase()
  const foundKey = Object.keys(notificationMapping).find((key) => lowercasedInput.includes(key))
  return foundKey ? (notificationMapping[foundKey] as TNotificationType) : ''
}
