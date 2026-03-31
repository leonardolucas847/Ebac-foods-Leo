import * as S from './styles'
import ReactDOM from 'react-dom'
import { Props as PropsModal } from '../Prato/index'
import FundoGF from '../../assets/FundoGF.png'
import logo from '../../assets/logo.svg'
import lixo from '../../assets/LixoCarrinho.png'
import { useState } from 'react'
import { useCarrinho } from '../../contexts/CarrinhoContext'
type Props = {
  type: 'home' | 'perfil'
}
const Modal = ({ isOpen, onClose, children }: PropsModal) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  )
}

const Baner = ({ type }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  const { itens, removerItem } = useCarrinho()
  if (type === 'home') {
    return (
      <S.BannerLayout style={{ backgroundImage: `url(${FundoGF})` }}>
        <div>
          <S.LogoEfood src={`${logo}`} />
          <S.Frase>
            Viva experciências gastronômicas no conforto da sua casa
          </S.Frase>
        </div>
      </S.BannerLayout>
    )
  }

  return (
    <>
      <S.BannerLayout
        style={{
          backgroundImage: `url(${FundoGF})`,
          height: '160px',
          marginBottom: '300px '
        }}
      >
        <div>
          <S.CardImagem>
            <p className="escrita" style={{ fontWeight: '100' }}>
              Italiana
            </p>
            <p className="escrita">La Dolce Vita Trattoria</p>
          </S.CardImagem>
          <S.Detalhes>
            <S.VoltarHome to="/">Restaurantes</S.VoltarHome>
            <S.LogoEfood src={`${logo}`} />
            <S.Carrinho onClick={toggleModal}>
              0 produto(s) no carrinho
            </S.Carrinho>
          </S.Detalhes>
        </div>
      </S.BannerLayout>
      <Modal isOpen={isOpen} onClose={toggleModal} titulo={''}>
        {itens.map((item, index) => (
          <div key={index}>
            <img src={item.imagePrato} alt={item.tituloPrato} />
            <div>
              <h2>{item.tituloPrato}</h2>
              <p>R$ {item.price.toFixed(2)}</p>
            </div>
            <button className="lixo" onClick={() => removerItem(index)}>
              <img src={lixo} alt="Remover" />
            </button>
          </div>
        ))}
      </Modal>
    </>
  )
}
export default Baner
