import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: solid 1px ${cores.vermelho};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonContainer} {
    display: block;
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    width: 150px;
    margin-left: 8px;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px 8px 8px 16px;
`
export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
`

export const ContainerAvalicao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
