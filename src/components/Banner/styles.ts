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
export const Carrinho = styled.a`
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
export const ModalContainer = styled.div`
  list-style: none;
  font-size: 14px;
  position: fixed;

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
  div {
    height: 100px;
    position: relative;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    margin: 16px;
    align-items: center;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      flex-shrink: 0;
      @media (max-width: 1024px) {
        max-width: 400px;
        width: 100%;
        height: auto;
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
    div {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
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
