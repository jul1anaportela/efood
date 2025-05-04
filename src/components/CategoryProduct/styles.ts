import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  margin: 64px 0 120px;
  width: 320px;
  padding: 8px;
`

export const Titulo = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`
