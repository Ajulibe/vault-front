import type { TNotification } from '../sharedTypes'

export interface ITableDisplayViewProps {
  data: TNotification[] | []
  isLoading: boolean
}
