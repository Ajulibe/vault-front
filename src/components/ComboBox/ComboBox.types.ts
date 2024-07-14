import { ReactSearchAutocompleteProps } from 'react-search-autocomplete/dist/components/ReactSearchAutocomplete'
import { TNotificationItem } from '@/types/sharedTypes'

export interface IComboBoxNotificationItem extends TNotificationItem {
  id: string
}

export interface IComboBoxProps extends ReactSearchAutocompleteProps<IComboBoxNotificationItem> {
  onChange: (value: string) => void
  items: IComboBoxNotificationItem[]
}
