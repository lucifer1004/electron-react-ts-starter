import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import 'jest-dom/extend-expect'
import App from '../App'

describe('Test if', () => {
  it('App renders', () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Button works', () => {
    const {getByText, asFragment} = render(<App />)
    const p = getByText(/You have/)

    expect(p).toHaveTextContent('You have clicked the button 0 times')

    fireEvent.click(getByText('Click'))
    expect(p).toHaveTextContent('You have clicked the button 1 time')
    expect(asFragment()).toMatchSnapshot()

    fireEvent.click(getByText('Click'))
    expect(p).toHaveTextContent('You have clicked the button 2 times')
    expect(asFragment()).toMatchSnapshot()
  })
})
