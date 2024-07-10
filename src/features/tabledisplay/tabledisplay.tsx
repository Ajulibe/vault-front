import Spinner from '@/components/Spinner/Spinner'
import { TNotification } from '@/types'
import Table from '@/components/Table/Table'
import styles from './TableDisplay.module.scss'

interface ITableDisplayViewProps {
  data: TNotification[] | []
  isLoading: boolean
}

const TableDisplayView: React.FC<ITableDisplayViewProps> = ({ data, isLoading }) => {
  if (isLoading) return <Spinner />

  if (!data.length) return <div>No result...</div>

  return (
    <div className={styles.results}>
      <Table rows={data} />
    </div>
  )
}

export default TableDisplayView
