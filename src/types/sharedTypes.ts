export type TNotificationType = 'TRANSACTION_SENT' | 'TRANSACTION_RECEIVED' | 'ACCOUNT_CREATED'

export type TNotificationItem = { name: string; value: TNotificationType | string }

export type TSearchNotifications = Array<TNotificationItem>

export interface ITransactionNotificationsData {
  amount: number
  from: string
  to: string
  unit: string
  id: number
}

interface IAccountCreatedData {
  currency: string
  name: string
  id: number
}

export type INotificationsData = ITransactionNotificationsData | IAccountCreatedData

export interface Notif<T extends INotificationsData> {
  id: number
  type: string
  data: T
}

export interface TTransactionSentNotification extends Notif<ITransactionNotificationsData> {
  type: 'TRANSACTION_SENT'
}

export interface TTransactionReceivedNotification extends Notif<ITransactionNotificationsData> {
  type: 'TRANSACTION_RECEIVED'
}

export interface TAccountCreatedNotification extends Notif<IAccountCreatedData> {
  type: 'ACCOUNT_CREATED'
}

export type TNotification =
  | TTransactionSentNotification
  | TTransactionReceivedNotification
  | TAccountCreatedNotification
