import React from 'react'
import styles from './CopyableCode.module.scss'

interface ICopyableCodeProps {
  text: string
  onCopy: (text: string) => void
}

const CopyableCode: React.FC<ICopyableCodeProps> = ({ text, onCopy }) => {
  const handleCopy = () => {
    onCopy(text)
  }

  return (
    <div className={styles.copyableCodeWrapper}>
      <code onClick={handleCopy} className={styles.code}>
        {text}
      </code>
      <span className={styles.copyText}>click to copy</span>
    </div>
  )
}

export default CopyableCode
