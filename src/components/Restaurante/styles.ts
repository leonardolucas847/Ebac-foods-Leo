import styled from 'styled-components'
import { CiStar } from 'react-icons/ci'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 480px;
  width: 100%;
  height: 400px;
`

export const NomeNota = styled.div`
  paddin-top: 8px;
  padding-bottom: 16px;
  display: flex;
`
export const Image = styled.img`
  max-width: 480px;
  width: 100%;
  height: 240px;
`
export const Descricao = styled.p`
  /* descricao */

  width: 456px;
  height: 88px;
  left: 179px;
  top: 702px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* ou 157% */

  color: ${cores.vermelho};
`

export const Titulo = styled.h3`
  width: 92px;
  height: 21px;
  left: 178px;
  top: 665px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: ${cores.vermelho};
`
export const Infos = styled.div`
  top: 16px;
  right: 16px;
`
