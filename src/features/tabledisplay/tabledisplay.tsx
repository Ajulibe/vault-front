import type { ITableDisplayViewProps } from '@/types'
import Spinner from '@/components/Spinner/Spinner'
import Table from '@/components/Table/Table'
import styles from './TableDisplay.module.scss'

const TableDisplayView = ({ data, isLoading }: ITableDisplayViewProps) => {
  if (isLoading) return <Spinner />

  if (!data.length) return <div>No result...</div>

  return (
    <div className={styles.results}>
      <Table rows={data} />
    </div>
  )
}

export default TableDisplayView
