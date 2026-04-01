import { render, screen } from '@testing-library/react'

import Cardapio from './index'
import Restaurante from '../../models/Restaurant'
import sushi from '../../assets/sushi.png'
import PizzaMarguirita from '../../assets/pizzaCardapio.png'

const restauranteTest: Restaurante = {
  id: 1,
  description:
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  title: 'Hioki Sushi',
  nota: 4.9,
  infos: ['Destaques da semana', 'Japonesa'],
  image: sushi,
  pratos: [
    {
      tituloPrato: 'Pizza Marguerita',
      descriptionPrato:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      price: 35.9,
      imagePrato: PizzaMarguirita,
      infoPrato: [
        'A pizza Margherita é uma pizza clássica da culinária italiana...',
        'serve 2 ou 3 pessoas'
      ]
    },
    {
      tituloPrato: 'Pizza Calabresa',
      descriptionPrato:
        'Calabresa fatiada, cebola roxa, molho de tomate e mussarela. Uma combinação clássica e irresistível!',
      price: 38.9,
      imagePrato: PizzaMarguirita,
      infoPrato: [
        'Pizza calabresa com ingredientes selecionados.',
        'serve 2 ou 3 pessoas'
      ]
    }
  ]
}

test('renderiza os pratos do restaurante', () => {
  render(<Cardapio title={0} menu={restauranteTest.pratos} />)
  expect(
    screen.getByText(/A clássica Marguerita: molho de tomate suculento/i)
  ).toBeInTheDocument()
})
