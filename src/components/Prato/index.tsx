import { useState } from 'react'
import ReactDOM from 'react-dom'
import clozed from '../../assets/closeIMG.png'
import Prato from '../../models/Prato'
import * as S from './styles'
import { useCarrinho } from '../../contexts/CarrinhoContext'
export type Props = {
  isOpen: boolean
  onClose: () => void
  titulo: string
  children: React.ReactNode
}
const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          <img src={clozed} alt="Fechar" />
        </button>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  )
}

const PratoUnico = ({
  tituloPrato,
  descriptionPrato,
  imagePrato,
  price,
  infoPrato
}: Prato) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  const { adicionarItem } = useCarrinho()
  const AdicinarAoCarrinho = () => {
    adicionarItem({
      tituloPrato,
      imagePrato,
      price,
      descriptionPrato,
      infoPrato
    })
    toggleModal()
  }
  return (
    <>
      <S.Card>
        <S.ImageCardapio
          style={{ backgroundImage: `url(${imagePrato})` }}
        ></S.ImageCardapio>
        <S.TituloCardapio>{tituloPrato}</S.TituloCardapio>
        <S.DescricaoCardapio>{descriptionPrato}</S.DescricaoCardapio>
        <S.BotaoCarrinho type="button" onClick={toggleModal}>
          Mais Detalhes
        </S.BotaoCarrinho>
      </S.Card>
      <Modal isOpen={isOpen} onClose={toggleModal} titulo={tituloPrato}>
        <img src={imagePrato} alt={tituloPrato} />
        <S.infosPrato>
          <h2>{tituloPrato}</h2>
          {infoPrato.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
          <S.BotaoCarrinho type="button" onClick={AdicinarAoCarrinho}>
            Adicionar ao Carrinho - R$ {price.toFixed(2)}
          </S.BotaoCarrinho>
        </S.infosPrato>
      </Modal>
    </>
  )
}

export default PratoUnico
