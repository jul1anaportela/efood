import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: ${(props) => (props.size === 'big' ? ' 8px 16px' : ' 4px 6px')};
  border-radius: 4px;
  display: inline-block;
`
