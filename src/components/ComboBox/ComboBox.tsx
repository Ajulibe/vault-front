import type { IComboBoxNotificationItem, IComboBoxProps } from './ComboBox.types'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import styles from './ComboBox.module.scss'

const ComboBox = ({ onChange, ...props }: IComboBoxProps) => {
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
        showIcon={true}
        onClear={handleClearInput}
        className={styles.combo as string}
        {...props}
      />
    </div>
  )
}

export default ComboBox
