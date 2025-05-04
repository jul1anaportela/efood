import { FooterContainer, SocialContainer, CopyRight } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Logo" />
    <SocialContainer>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </SocialContainer>
    <CopyRight>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </CopyRight>
  </FooterContainer>
)
export default Footer
