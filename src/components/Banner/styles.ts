import { styled } from 'styled-components'
import { cores } from '../../styles'

export const BannerLayout = styled.div`
  width: 100%;
  height: 400px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
  }
`
export const Frase = styled.p`
  color: ${cores.vermelho};
  max-width: 640px;
  width: 100%;

  position: absolute;
  left: 50%;
  top: 90%;
  font-size: 36px;
  transform: translate(-50%, -100%);
  text-align: center;
`

export const LogoEfood = styled.img`
  position: absolute;
  top: 22%;
  transform: translate(-50%, -100%);

  left: 50%;
`
