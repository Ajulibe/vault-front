import React from 'react'
import { TSeachEvents } from '@/types'
import styles from './Dropdown.module.scss'

interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: TSeachEvents
  defaultValue?: string
  value?: string
}

const Dropdown: React.FC<IDropdownProps> = ({ options, defaultValue, value, ...props }) => {
  return (
    <div className={styles.dropdownWrapper}>
      <select value={value} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
