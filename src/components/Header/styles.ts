import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
`
export const BackgroundImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  color: ${cores.vermelho};
`

export const LogoImage = styled.img`
  max-width: 100px;
  margin-bottom: 130px;
`
export const HeaderText = styled.h1`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`

export const HeaderImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`
