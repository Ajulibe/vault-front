import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { TNotification } from '@/types'
import Table from '../Table'
import { toast } from 'react-toastify'

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

  it('should render without crashing', () => {
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('ℹ Details')).toBeInTheDocument()
    expect(screen.getByText('📢 Notifications')).toBeInTheDocument()
  })

  it('should render transaction sent row correctly', () => {
    expect(screen.getByText('0x123')).toBeInTheDocument()
    expect(screen.getByText('sent')).toBeInTheDocument()
    expect(screen.getByText('1ETH')).toBeInTheDocument()
    expect(screen.getByText('0x456')).toBeInTheDocument()
  })

  it('should render transaction received row correctly', () => {
    expect(screen.getByText('0xabc')).toBeInTheDocument()
    expect(screen.getByText('received')).toBeInTheDocument()
    expect(screen.getByText('2BTC')).toBeInTheDocument()
    expect(screen.getByText('0x789')).toBeInTheDocument()
  })

  it('should render account created row correctly', () => {
    expect(screen.getByText('Main Account was created')).toBeInTheDocument()
    expect(screen.getByText('🎊')).toBeInTheDocument()
    expect(screen.getByText('BTC')).toBeInTheDocument()
  })

  it('should trigger copy to clipboard and show toast notification', () => {
    const copyableCode = screen.getAllByText('0x123')[0] as HTMLElement
    fireEvent.click(copyableCode)
    expect(toast).toHaveBeenCalledWith('Copied to clipboard')
  })
})
