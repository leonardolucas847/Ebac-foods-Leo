import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import Restaurant from '../../models/Restaurant'

const Cardapios = () => {
  const { state } = useLocation()
  const restaurante: Restaurant = state?.restaurante

  return (
    <>
      <Banner type="perfil" />
      <div>
        <Cardapio title={restaurante.id} menu={restaurante.pratos} />
      </div>
    </>
  )
}

export default Cardapios
