import React from 'react'
import styles from './Spinner.module.scss'

export const Spinner: React.FC = () => {
  return (
    <div className={styles.loadingSpinner} data-testid="loading-icon">
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
