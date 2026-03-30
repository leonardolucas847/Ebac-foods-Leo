import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 480px;
  width: 100%;
  height: 400px;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    margin-bottom: 24px; /* ← separa os cards entre si */
    overflow: hidden;
  }
`

export const NomeNota = styled.div`
  background-color: ${cores.branco};
  padding: 16px 8px;
  padding-top: 8px;
  display: flex;
  font-weight: 800;
  justify-content: space-between;
  span {
    background-color: transparent;
    display: flex;
    color: ${cores.vermelho};
  }
`
export const Image = styled.div`
  position: relative;
  z-index: 1;
  max-width: 100%;
  width: 100%;
  max-height: 280px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    height: 300px; /* ← altura fixa para a imagem no mobile */
    max-height: none;
  }
`
export const Descricao = styled.p`
  background-color: ${cores.branco};
  padding: 16px 8px;
  padding-top: 24px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: ${cores.vermelho};
  @media (max-width: 1024px) {
    padding-bottom: 24px;
  }
`

export const Titulo = styled.h3`
  background-color: ${cores.branco};
  width: 92px;
  height: 21px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};
`
export const Infos = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  position: absolute;
  right: 0;
  z-index: 1;
  display: inline-block;
  color: ${cores.vermelho};
  background-color: transparent;
  span {
    display: block;
    background-color: transparent;
    color: ${cores.vermelho};
  }
`
export const Botao = styled.div`
  background-color: ${cores.branco};
  padding: 8px;
  padding-top: 0;
  a {
    text-decoration: none;
    background-color: transparent;
    color: ${cores.fundo};
  }
`
