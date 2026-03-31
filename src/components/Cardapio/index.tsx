import Restaurant from '../../models/Restaurant'
import PratoUnico from '../Prato'
import { List, Section } from './styles'
export type Props = {
  title: Restaurant['id']
  menu: Restaurant['pratos']
}
const Cardapio = ({ menu }: Props) => (
  <Section>
    <div className="container">
      <List>
        {menu.map((prato) => (
          <PratoUnico
            key={prato.tituloPrato}
            descriptionPrato={prato.descriptionPrato}
            price={prato.price}
            tituloPrato={prato.tituloPrato}
            imagePrato={prato.imagePrato}
            infoPrato={prato.infoPrato}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default Cardapio
