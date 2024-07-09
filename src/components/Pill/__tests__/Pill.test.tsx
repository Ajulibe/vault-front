import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NotificationColors } from '@/types'
import Pill from '../Pill'

describe('Components: Pill.tsx', () => {
  it('renders correctly with given text and event type', () => {
    render(<Pill text="Test Event" eventType="TRANSACTION_SENT" />)
    expect(screen.getByText('Test Event')).toBeInTheDocument()
  })

  it('applies correct styles based on event type', () => {
    render(<Pill text="Test Event" eventType="TRANSACTION_SENT" />)
    const pillElement = screen.getByText('Test Event').closest('span')
    const dotElement = screen.getByText('Test Event').previousSibling as HTMLElement

    const color = NotificationColors['TRANSACTION_SENT']
    const lightColor = `rgba(6, 196, 224, 0.1)`
    const dotColor = `rgba(6, 196, 224, 0.6)`

    expect(pillElement).toHaveStyle(`background-color: ${lightColor}`)
    expect(pillElement).toHaveStyle(`color: ${color}`)
    expect(dotElement).toHaveStyle(`background-color: ${dotColor}`)
  })

  // it('applies correct styles for different event types', () => {
  //   render(<Pill text="Account Created" eventType="ACCOUNT_CREATED" />)
  //   const pillElement = screen.getByText('Account Created').closest('span')
  //   const dotElement = screen.getByText('Account Created').previousSibling as HTMLElement

  //   const color = NotificationColors['ACCOUNT_CREATED']
  //   const lightColor = `rgba(255, 96, 57, 0.1)` // Light color based on ACCOUNT_CREATED color
  //   const dotColor = `rgba(255, 96, 57, 0.6)` // Dot color based on ACCOUNT_CREATED color

  //   expect(pillElement).toHaveStyle(`background-color: ${lightColor}`)
  //   expect(pillElement).toHaveStyle(`color: ${color}`)
  //   expect(dotElement).toHaveStyle(`background-color: ${dotColor}`)
  // })
})
