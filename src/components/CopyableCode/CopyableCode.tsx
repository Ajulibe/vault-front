import type { ICopyableCodeProps } from './CopyableCode.types'
import { copyToClipboard } from '@/utils/copyToClipboard'
import styles from './CopyableCode.module.scss'
import { toast } from 'react-toastify'

const CopyableCode = ({ text }: ICopyableCodeProps) => {
  const notifySuccess = () => {
    toast.success('Copied to clipboard')
  }

  const notifyError = () => {
    toast.error('Failed to copy text')
  }

  const handleCopyData = async () => {
    try {
      await copyToClipboard(text, notifySuccess)
    } catch {
      notifyError()
    }
  }

  return (
    <button className={styles.copyableCodeWrapper} onClick={handleCopyData}>
      <code className={styles.code}>{text}</code>
      <span className={styles.copyText}>click to copy</span>
    </button>
  )
}

export default CopyableCode
