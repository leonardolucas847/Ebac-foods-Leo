import Restaurante from '../../models/Restaurant'
import MRestaurante from '../Restaurante'
import { List, Section, Title } from './styles'
export type Props = {
  title: string
  rests: Restaurante[]
}
const RestaurantesList = ({ title, rests }: Props) => (
  <Section>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {rests.map((restaurante) => (
          <MRestaurante
            key={restaurante.id}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            nota={restaurante.nota}
            title={restaurante.title}
            id={restaurante.id}
            pratos={restaurante.pratos}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default RestaurantesList
