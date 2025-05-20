import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative; /* Necessário para posicionar o ::before */
  color: ${cores.branca};
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const BannerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1; /* Coloca a imagem atrás do overlay */

   &::before {
    content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
    // background-color: rgba(0, 0, 0, 0.3);
     z-index: 0; /* Garante que o overlay esteja acima da imagem */
  // }
`

export const Infos = styled.p`
  font-size: 18px;
  font-weight: 100;
  padding-bottom: 8px;
  padding: 24px 120px 100px;
  position: relative; /* Cria um contexto de z-index para este elemento */
  z-index: 1; /* Garante que o texto fique na frente do overlay */
`

export const TitleRestaurant = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding: 50px 120px;
  position: relative; /* Cria um contexto de z-index para este elemento */
  z-index: 1; /* Garante que o texto fique na frente do overlay */
`
