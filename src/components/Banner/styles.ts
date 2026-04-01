import { styled } from 'styled-components'
import { cores } from '../../styles'
import imagemBaner from '../../assets/imagem-do-baner.png'
import { Link } from 'react-router-dom'
export const BannerLayout = styled.section`
  width: 100%;
  height: 440px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;
  position: relative;
`
export const CardImagem = styled.div`
  background-color: transparent;
  /* Mantendo seu posicionamento original */
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 280px;
  margin: 0 auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${imagemBaner}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 90px;
  .escrita {
    background-color: transparent;
    margin-left: 16%;
    display: inline-block;
    font-size: 32px;
    color: ${cores.branco};
    z-index: 99990;
    position: relative;
    padding-top: 24px;
    padding-bottom: 32px;
  }
`

export const Frase = styled.p`
  color: ${cores.vermelho};
  max-width: 640px;
  width: 100%;
  background-color: transparent;
  position: absolute;
  left: 50%;
  top: 90%;
  font-size: 36px;
  transform: translate(-50%, -100%);
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 24px;
    max-width: 480px;
  }
`

export const LogoEfood = styled.img`
  height: 64px;
  display: inline-block;
  width: auto;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1024px) {
    height: 84px;
    top: 80px;
  }
`
export const Detalhes = styled.div`
  display: flex;
  height: 160px;
  justify-content: space-between;
  padding: 20px 170px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  pading: 0 20px;
`
export const Carrinho = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
  display: inline-block;
  font-size: 18px;
  color: ${cores.vermelho};
  text-decoration: none;
  text-align: center;

  width: 200px;
  &:last-child {
    text-align: right; /* Alinha o texto do segundo link à direita */
  }
`
export const VoltarHome = styled(Link)`
  justify-content: center;
  display: inline-block;
  font-size: 18px;
  color: ${cores.vermelho};
  text-decoration: none;
  text-align: center;

  width: 200px;
  &:last-child {
    text-align: right; /* Alinha o texto do segundo link à direita */
  }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
//  MODDAL N 1 --- relacionada ao carrinho
export const ModalContainer = styled.div`
  list-style: none;
  font-size: 14px;
  position: fixed;
  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: ${cores.vermelho};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  z-index: 1001;

  @media (max-width: 1024px) {
    width: 100%;
  }
  .Next {
    cursor: pointer;
    font-size: 14px;
    padding: 6px;
    display: inline-block;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    border: none;
    @media (max-width: 1024px) {
      top: 16px;
    }
  }

  .div1 {
    height: 100px;
    position: relative;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 8px;
    align-items: center;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      flex-shrink: 0;
      @media (max-width: 1024px) {
        margin-right: 0px;
        margin-top: 16px;
      }
    }
    .lixo {
      position: absolute;
      top: 76px;
      right: 8px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      img {
        height: 16px;
        width: 16px;
      }
    }

    .div2 {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 8px;
      h2 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 18px;
        @media (max-width: 1024px) {
          font-size: 20px;
          margin-top: 8px;
          margin-bottom: 16px;
        }
      }

      p {
        font-size: 14px;
        line-height: 22px;
        @media (max-width: 1024px) {
          font-size: 16px;
          max-width: 400px;
        }
      }
    }
  }
`
export const Price = styled.p`
  color: ${cores.amarelo};
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
`
export const ModalTitulo = styled.h2`
  color: ${cores.amarelo};
  margin-bottom: 16px;
  margin-top: 32px;
  margin-left: 8px;
`

//  MODDAL N 2 e N 3 --- relacionada a entrega e pagamento

export const FormEntrega = styled.form`
  display: flex;
  flex-direction: column;
`
export const Campo = styled.div`
  margin: 8px;
  display: flex;
  color: ${cores.amarelo};
  font-weight: bold;
  flex-direction: column;
  input {
    margin-top: 8px;
    padding: 8px;
    background-color: ${cores.amarelo};
    border: none;
    font-weight: bold;
    font-size: 14px;
`
export const CampoNumber = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px;
  .Next {
  text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
`
//  MODDAL N 4 --- relacionada conclusao do pedido

export const Mesage = styled.div`
  margin-left: 8px;
`
export const P = styled.p`
  color: ${cores.amarelo};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
