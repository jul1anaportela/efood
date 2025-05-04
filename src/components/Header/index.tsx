import fundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import {
  HeaderContainer,
  BackgroundImage,
  LogoImage,
  HeaderText,
  ContentOverlay
} from './styles'

const Header = () => (
  <HeaderContainer>
    <BackgroundImage src={fundo} alt="background" />
    <ContentOverlay>
      <LogoImage src={logo} alt="logo" />
      <HeaderText>
        <p>Viva experiências gastronômicas</p>
        <p>no conforto da sua casa</p>
      </HeaderText>
    </ContentOverlay>
  </HeaderContainer>
)

export default Header
