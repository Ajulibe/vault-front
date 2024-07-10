import styles from './Spinner.module.scss'

export const Spinner = () => {
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
