import { styled } from 'styled-components'
import { cores } from '../../styles'
import imagemBaner from '../../assets/imagem-do-baner.png'

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
