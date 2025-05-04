import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  border: none;
  padding: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  border: none;
  padding: 8px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`
