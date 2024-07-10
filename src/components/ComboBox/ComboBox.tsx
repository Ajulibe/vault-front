import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { ReactSearchAutocompleteProps } from 'react-search-autocomplete/dist/components/ReactSearchAutocomplete'
import { TNotificationItem } from '@/types'
import styles from './ComboBox.module.scss'

interface IComboBoxNotificationItem extends TNotificationItem {
  id: string
}

interface IComboBoxProps extends ReactSearchAutocompleteProps<IComboBoxNotificationItem> {
  onChange: (value: string) => void
  items: IComboBoxNotificationItem[]
}

const ComboBox: React.FC<IComboBoxProps> = ({ onChange, ...props }) => {
  const handleOnSelect = (item: IComboBoxNotificationItem) => {
    onChange(item.value)
  }

  const handleOnSearch = (_: string, results: IComboBoxNotificationItem[]) => {
    if (!results.length) {
      onChange('')
    }
  }

  const handleClearInput = () => {
    onChange('')
  }

  const formatResult = (item: any) => {
    return <span>{item.name}</span>
  }

  return (
    <div className={styles.comboboxWrapper}>
      <ReactSearchAutocomplete
        onSelect={handleOnSelect}
        autoFocus
        onSearch={handleOnSearch}
        formatResult={formatResult}
        placeholder="Search or select an option"
        showIcon={false}
        onClear={handleClearInput}
        className={styles.combo as string}
        {...props}
      />
    </div>
  )
}

export default ComboBox
