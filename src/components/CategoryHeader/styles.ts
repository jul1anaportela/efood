import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  a {
    color: ${cores.vermelho};
  }
`
