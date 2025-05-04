import { Image } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import { Link } from 'react-router-dom'

const CategoryHeader = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <nav>
      <ul>
        <li>
          <Link to="/">Restaurante</Link>
        </li>
      </ul>
    </nav>
    <Link to="/">
      <img src={logo} alt="logo efood" />
    </Link>
    <div>
      <span>0 - produto(s) no carrinho</span>
    </div>
  </Image>
)

export default CategoryHeader
