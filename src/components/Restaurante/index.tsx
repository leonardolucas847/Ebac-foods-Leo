import { cores } from '../../styles'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  Image,
  NomeNota,
  Botao
} from './styles'
import { FaStar } from 'react-icons/fa'
import Tag from '../Tag'

export type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const MRestaurante = ({ title, description, image, nota, infos }: Props) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})` }}>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    </Image>
    <NomeNota>
      <Titulo>{title}</Titulo>
      <span>
        {nota}
        <FaStar
          size={21}
          color={cores.icon}
          style={{ marginLeft: '4px' }}
        />{' '}
      </span>
    </NomeNota>
    <Descricao>{description}</Descricao>
    <Botao>
      <Tag size="big">
        <a href="#">Saiba Mais</a>
      </Tag>
    </Botao>
  </Card>
)

export default MRestaurante
