import Restaurante from '../../models/Restaurant'
import MRestaurante from '../Restaurante'
import { List, Section } from './styles'
export type Props = {
  rests: Restaurante[]
}
const RestaurantesList = ({ rests }: Props) => (
  <Section>
    <div className="container">
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
