export type TEventType = 'TRANSACTION_SENT' | 'TRANSACTION_RECEIVED' | 'ACCOUNT_CREATED'

export type TSeachEvents = Array<{ name: string; value: TEventType | string }>

export interface ITransactionEventsData {
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

export type IEventsData = ITransactionEventsData | IAccountCreatedData

export interface Notif<T extends IEventsData> {
  id: number
  type: string
  data: T
}

export interface TTransactionSentEvent extends Notif<ITransactionEventsData> {
  type: 'TRANSACTION_SENT'
}

export interface TTransactionReceivedEvent extends Notif<ITransactionEventsData> {
  type: 'TRANSACTION_RECEIVED'
}

export interface TAccountCreatedEvent extends Notif<IAccountCreatedData> {
  type: 'ACCOUNT_CREATED'
}

export type TEvent = TTransactionSentEvent | TTransactionReceivedEvent | TAccountCreatedEvent

export enum EventColors {
  TRANSACTION_SENT = 'rgba(255, 96, 57, 1)',
  TRANSACTION_RECEIVED = 'rgba(16, 206, 62)',
  ACCOUNT_CREATED = 'rgba(6, 196, 224)'
}
