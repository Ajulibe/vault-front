import { ReactSearchAutocompleteProps } from 'react-search-autocomplete/dist/components/ReactSearchAutocomplete'
import type { TNotificationItem } from '..'

export interface IComboBoxNotificationItem extends TNotificationItem {
  id: string
}

export interface IComboBoxProps extends ReactSearchAutocompleteProps<IComboBoxNotificationItem> {
  onChange: (value: string) => void
  items: IComboBoxNotificationItem[]
}
