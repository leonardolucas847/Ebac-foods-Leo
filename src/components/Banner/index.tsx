import { BannerLayout, Frase, LogoEfood } from './styles'
import FundoGF from '../../assets/FundoGF.png'
import logo from '../../assets/logo.svg'

const Baner = () => (
  <BannerLayout style={{ backgroundImage: `url(${FundoGF})` }}>
    <div className="container">
      <Frase>Viva experciências gastronômicas no conforto da sua casa</Frase>
    </div>
    <LogoEfood src={`${logo}`} />
  </BannerLayout>
)
export default Baner
