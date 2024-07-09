import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Dropdown from '../Dropdown'

const options = [
  { name: 'test', value: 'TEST' },
  { name: 'exams', value: 'EXAMS' },
  { name: 'job', value: 'JOB' }
]

describe('Components: Dropdown.tsx', () => {
  beforeEach(() => {
    render(<Dropdown options={options} />)
  })

  test('should render correctly', () => {
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
  })

  test('should render options correctly', () => {
    const options = screen.getAllByRole('option')[0]
    expect(options).toHaveValue('TEST')
  })
})
