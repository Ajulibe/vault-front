import { TEvent, TEventType, TSeachEvents } from '@/types'
import { useCallback, useEffect, useState } from 'react'

import Dropdown from '@/components/Dropdown/Dropdown'
import TableDisplayView from '@/features/tabledisplay/tabledisplay'
import styles from './app.module.scss'

const API = import.meta.env['VITE_API_BASE_URL']

export const Events: TSeachEvents = [
  { name: 'All Events', value: '' },
  { name: 'Transactions sent', value: 'TRANSACTION_SENT' },
  { name: 'Transactions received', value: 'TRANSACTION_RECEIVED' },
  { name: 'Account created', value: 'ACCOUNT_CREATED' }
]

const App = () => {
  const [searchEvent, setSearchEvent] = useState<{ name: string; value: TEventType | string }>(
    Events[0]!
  )
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<[] | TEvent[]>([])

  const fetchEventsData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/search?q=${searchEvent.value}`)
      const data = await res.json()
      // console.log(data, 'res')
      setResults(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [searchEvent])

  useEffect(() => {
    fetchEventsData()
  }, [fetchEventsData])

  const handleFilterEvents = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const selectedValue = e.currentTarget.value
    const selectedEvent = Events.find((event) => event.value === selectedValue)
    if (selectedEvent) {
      setSearchEvent(selectedEvent)
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          value={searchEvent.value}
          options={Events}
          name="eventsDropdown"
          placeholder="select an event from the dropdown"
          onChange={handleFilterEvents}
        />
      </div>
      <TableDisplayView isLoading={isLoading} data={results} />
    </div>
  )
}

export default App
