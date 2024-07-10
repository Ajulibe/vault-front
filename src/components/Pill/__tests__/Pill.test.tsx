import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NotificationColors } from '@/types'
import Pill from '../Pill'
import { rgbaToRgb } from '@/utils/rgbaToRgb'

describe('Components: Pill.tsx', () => {
  it('should render correctly with given the text and event type', () => {
    render(<Pill text="Test Event" eventType="TRANSACTION_SENT" />)
    expect(screen.getByText('Test Event')).toBeInTheDocument()
  })

  it('should apply the correct styles for different event types', () => {
    render(<Pill text="Account Created" eventType="ACCOUNT_CREATED" />)
    const pillElement = screen.getByText('Account Created').closest('span')
    const dotElement = screen.getByText('Account Created').previousSibling as HTMLElement

    const color = NotificationColors['ACCOUNT_CREATED']
    const lightColor = rgbaToRgb(color, 0.1)
    const dotColor = rgbaToRgb(color, 0.6)

    expect(pillElement).toHaveStyle(`background-color: ${lightColor}`)
    expect(pillElement).toHaveStyle(`color: ${color}`)
    expect(dotElement).toHaveStyle(`background-color: ${dotColor}`)
  })
})
