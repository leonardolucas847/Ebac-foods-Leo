import { cores } from '../../styles'
import Restaurant from '../../models/Restaurant'
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
import { Link } from 'react-router-dom'

const MRestaurante = ({
  title,
  id,
  description,
  image,
  pratos,
  nota,
  infos
}: Restaurant) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})`, height: '217px' }}>
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
        <Link
          to={`/restaurante/${id}`}
          state={{
            restaurante: { id, title, description, image, nota, infos, pratos }
          }}
        >
          Saiba Mais
        </Link>
      </Tag>
    </Botao>
  </Card>
)

export default MRestaurante
