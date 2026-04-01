import { useLocation } from 'react-router-dom'
import Baner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import Restaurant from '../../models/Restaurant'

const Cardapios = () => {
  const { state } = useLocation<{ restaurante: Restaurant }>()
  const restaurante: Restaurant = state?.restaurante

  return (
    <>
      <Baner type="perfil" />
      <div>
        <Cardapio title={restaurante.id} menu={restaurante.pratos} />
      </div>
    </>
  )
}

export default Cardapios
