import Restaurante from '../../models/Restaurant'
import sushi from '../../assets/sushi.png'
import RestaurantesList from '../RestaurantesList'
import PizzaMarguirita from '../../assets/pizzaCardapio.png'
import { ConteudoHome } from './styles'
const MelhoresRestaurantes: Restaurante[] = [
  {
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
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      },
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: [
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      },
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: [
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      },
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: [
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      },
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: [
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      },
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: [
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
          'serve 2 ou 3 pessoas'
        ]
      }
    ]
  },
  {
    id: 2,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['Japonesa'],
    image: sushi,
    pratos: [
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: ['serve 2 ou 3 pessoas']
      }
    ]
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['Japonesa'],
    image: sushi,
    pratos: [
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: ['serve 2 ou 3 pessoas']
      }
    ]
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['Japonesa'],
    image: sushi,
    pratos: [
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: ['serve 2 ou 3 pessoas']
      }
    ]
  },
  {
    id: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['Japonesa'],
    image: sushi,
    pratos: [
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: ['serve 2 ou 3 pessoas']
      }
    ]
  },
  {
    id: 6,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['Japonesa'],
    image: sushi,
    pratos: [
      {
        tituloPrato: 'Pizza Marguerita',
        descriptionPrato:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.',
        price: 35.9,
        imagePrato: PizzaMarguirita,
        infoPrato: ['serve 2 ou 3 pessoas']
      }
    ]
  }
]

const RestaurantesHome = () => (
  <ConteudoHome>
    <RestaurantesList rests={MelhoresRestaurantes} />
  </ConteudoHome>
)

export default RestaurantesHome
