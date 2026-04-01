import { render, screen } from '@testing-library/react'
import Banner from './index'

test('renderiza o banner', () => {
  render(<Banner type={'home'} />)
  expect(
    screen.getByText(/Viva expericiências gastronômicas/i)
  ).toBeInTheDocument()
})
