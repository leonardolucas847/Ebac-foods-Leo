import { fireEvent, render, screen } from '@testing-library/react'
import Restaurante from '../../models/Restaurant'
import sushi from '../../assets/sushi.png'
import PizzaMarguirita from '../../assets/pizzaCardapio.png'
import PratoUnico from '.'

test('testando o click para detalhar o os pratos', () => {
  render(
    <PratoUnico
      descriptionPrato={
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
      price={38.9}
      tituloPrato={'Pizza Calabresa'}
      imagePrato={PizzaMarguirita}
      infoPrato={[
        'A pizza Margherita é uma pizza clássica da culinária italiana...',
        'serve 2 ou 3 pessoas'
      ]}
    />
  )
  expect(
    screen.getByText(/A clássica Marguerita: molho de tomate suculento/i)
  ).toBeInTheDocument()
  const button = screen.getByRole('button', { name: /Mais Detalhes/i })
  fireEvent.click(button)
  expect(
    screen.getByText(
      /A pizza Margherita é uma pizza clássica da culinária italiana/i
    )
  ).toBeInTheDocument()
})
