import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 32px 0 80px;
`
export const CopyRight = styled.p`
  text-align: center;
  font-size: 10px;
  width: 480px;
  margin: 0 auto;
`
