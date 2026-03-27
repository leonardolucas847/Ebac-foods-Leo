import {
  BannerLayout,
  CardImagem,
  Carrinho,
  Detalhes,
  Frase,
  LogoEfood
} from './styles'
import FundoGF from '../../assets/FundoGF.png'
import logo from '../../assets/logo.svg'

type Props = {
  type: 'home' | 'perfil'
}

const Baner = ({ type }: Props) => {
  if (type === 'home') {
    return (
      <BannerLayout style={{ backgroundImage: `url(${FundoGF})` }}>
        <div>
          <LogoEfood src={`${logo}`} />
          <Frase>
            Viva experciências gastronômicas no conforto da sua casa
          </Frase>
        </div>
      </BannerLayout>
    )
  }
  return (
    <BannerLayout
      style={{ backgroundImage: `url(${FundoGF})`, height: '160px' }}
    >
      <CardImagem>
        <p className="escrita" style={{ fontWeight: '100' }}>
          Italiana
        </p>
        <p className="escrita">La Dolce Vita Trattoria</p>
      </CardImagem>
      <Detalhes>
        <Carrinho href="#">Restaurantes</Carrinho>
        <LogoEfood src={`${logo}`} />
        <Carrinho href="#">0 produto(s) no carrinho</Carrinho>
      </Detalhes>
    </BannerLayout>
  )
}
export default Baner
