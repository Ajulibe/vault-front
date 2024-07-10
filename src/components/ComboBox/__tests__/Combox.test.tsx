import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import ComboBox from '../ComboBox'

const items = [
  { id: '1', name: 'Transactions sent', value: 'TRANSACTION_SENT' },
  { id: '2', name: 'Transactions received', value: 'TRANSACTION_RECEIVED' },
  { id: '3', name: 'Account created', value: 'ACCOUNT_CREATED' }
]

describe('Components: ComboBox.tsx', () => {
  let onChangeMock: () => void
  beforeEach(() => {
    onChangeMock = vi.fn()
    render(<ComboBox items={items} onChange={onChangeMock} placeholder="select a notification" />)
  })

  it('should render without crashing', () => {
    expect(screen.getByPlaceholderText('select a notification')).toBeInTheDocument()
  })

  it('should call onChange with the correct value when an item is selected', () => {
    const element = screen.getByPlaceholderText('select a notification')
    fireEvent.change(element, {
      target: { value: 'sent' }
    })

    expect(element).toHaveValue('sent')
  })
})
