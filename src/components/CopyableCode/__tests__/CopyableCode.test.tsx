import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import CopyableCode from '../CopyableCode'

describe('Components: CopyableCode.tsx', () => {
  const text = 'test text'
  const onCopy = vi.fn()
  beforeEach(() => {
    render(<CopyableCode text={text} onCopy={onCopy} />)
  })

  it('should render the text correctly', () => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should call onCopy with the correct text when clicked', () => {
    fireEvent.click(screen.getByText(text))
    expect(onCopy).toHaveBeenCalledWith(text)
    expect(onCopy).toHaveBeenCalledTimes(1)
  })

  it('should show the tooltip text on hover', () => {
    expect(screen.getByText('click to copy')).toBeInTheDocument()
  })
})
