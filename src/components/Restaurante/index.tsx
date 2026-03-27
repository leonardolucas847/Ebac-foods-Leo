import { Card, Descricao, Infos, Titulo, Image } from './styles'
import { FaStar } from 'react-icons/fa'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const MRestaurante = ({ title, description, image, nota, infos }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <span key={info}>{info}</span>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <span>{nota}</span>
    </div>

    <Descricao>{description}</Descricao>
  </Card>
)

export default MRestaurante
