import Restaurante from '../../models/Restaurant'
import sushi from '../../assets/sushi.png'
import RestaurantesList from '../../components/RestaurantesList'
import { ConteudoHome } from './styles'
const MelhoresRestaurantes: Restaurante[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['17/05'],
    image: sushi
  },
  {
    id: 2,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: 4.9,
    infos: ['17/05'],
    image: sushi
  }
]

const RestaurantesHome = () => (
  <ConteudoHome>
    <RestaurantesList
      title="OS melhores da semana"
      rests={MelhoresRestaurantes}
    />
  </ConteudoHome>
)

export default RestaurantesHome
