import React from 'react'
import { render } from '@testing-library/react'
import { Example } from './Example'

describe('<Example /> component', () => {
  test('check initial render', () => {
    const { getByTestId } = render(<Example />)

    expect(getByTestId('example')).toBeInTheDocument()
    expect(getByTestId('example-title')).toBeInTheDocument()
    expect(getByTestId('example-title')).toHaveTextContent(
      'My first component!'
    )
  })
})
