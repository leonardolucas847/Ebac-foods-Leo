import { fireEvent, render, screen } from '@testing-library/react'
import Restaurante from '../../models/Restaurant'
import sushi from '../../assets/sushi.png'
import PizzaMarguirita from '../../assets/pizzaCardapio.png'
import { BrowserRouter } from 'react-router-dom'
import PratoUnico from '.'
import Prato from '../../models/Prato'
import MRestaurante from '.'
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

test('testando o click para detalhar o os pratos', () => {
  render(
    <BrowserRouter>
      <MRestaurante
        title={'Hioki Sushi'}
        description={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis'
        }
        infos={['Destaques da semana', 'Japonesa']}
        image={sushi}
        nota={4.9}
        id={1}
        pratos={restauranteTest.pratos}
      />
    </BrowserRouter>
  )
  expect(screen.getByText(/Hioki Sushi/i)).toBeInTheDocument()
})
test('Vai pro Perfil cardapio apos o click', () => {
  render(
    <BrowserRouter>
      <MRestaurante
        title={'Hioki Sushi'}
        description={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis'
        }
        infos={['Destaques da semana', 'Japonesa']}
        image={sushi}
        nota={4.9}
        id={1}
        pratos={restauranteTest.pratos}
      />
    </BrowserRouter>
  )
  const voltar = screen.getByRole('link', {
    name: /Saiba Mais/i
  })
  expect(voltar).toHaveAttribute('href', '/restaurante/1')
})
