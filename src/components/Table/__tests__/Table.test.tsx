import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TNotification } from '@/types/sharedTypes'
import Table from '../Table'

// Mock data
const rows: TNotification[] = [
  {
    id: 1,
    type: 'TRANSACTION_SENT',
    data: {
      from: '0x123',
      to: '0x456',
      amount: 1,
      unit: 'ETH',
      id: 1
    }
  },
  {
    id: 2,
    type: 'TRANSACTION_RECEIVED',
    data: {
      id: 2,
      from: '0x789',
      to: '0xabc',
      amount: 2,
      unit: 'BTC'
    }
  },
  {
    id: 3,
    type: 'ACCOUNT_CREATED',
    data: {
      id: 3,
      name: 'Main Account',
      currency: 'bitcoin'
    }
  }
]

// Mock the copyToClipboard function
vi.mock('@/utils/copyToClipboard', () => ({
  copyToClipboard: vi.fn((_, callback) => {
    callback()
  })
}))

// Mock the toast function
vi.mock('react-toastify', () => ({
  toast: vi.fn()
}))

describe('Components: Table.tsx', () => {
  beforeEach(() => {
    render(<Table rows={rows} />)
  })

  const confirmTextPresence = (textArray: string[]) => {
    textArray.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument()
    })
  }

  it('should render without crashing', () => {
    confirmTextPresence(['ID', 'ℹ Details', '📢 Notifications'])
  })

  it('should render transaction sent row correctly', () => {
    confirmTextPresence(['0x123', 'sent', '1ETH', '0x456'])
  })

  it('should render transaction received row correctly', () => {
    confirmTextPresence(['0xabc', 'received', '2BTC', '0x789'])
  })

  it('should render account created row correctly', () => {
    confirmTextPresence(['Main Account was created', '🎊', 'BTC'])
  })
})
