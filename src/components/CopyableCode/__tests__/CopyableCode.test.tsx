import * as clipboardUtils from '@/utils/copyToClipboard'

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import CopyableCode from '../CopyableCode'

describe('Components: CopyableCode.tsx', () => {
  const text = 'test text'
  beforeEach(() => {
    render(<CopyableCode text={text} />)
    vi.clearAllMocks()
  })

  it('should render the text correctly', () => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should call copyToClipboard and show success toast onClick', () => {
    vi.spyOn(clipboardUtils, 'copyToClipboard').mockImplementation(() => Promise.resolve())
    fireEvent.click(screen.getByText(text))
    expect(clipboardUtils.copyToClipboard).toHaveBeenCalledWith(text, expect.any(Function))
  })

  it('should show the tooltip text on hover', () => {
    expect(screen.getByText('click to copy')).toBeInTheDocument()
  })
})
