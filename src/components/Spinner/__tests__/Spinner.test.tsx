import { afterAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Spinner } from '../Spinner'

describe('Components:  Spinner.tsx', () => {
  beforeEach(() => {
    render(<Spinner />)
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  test('should render correctly', () => {
    const spinner = screen.getByTestId('loading-icon')
    screen.debug()
    expect(spinner).toBeInTheDocument()
  })
})
