import ProductList from '../../components/ProductList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import macarronada from '../../assets/images/macarronada.png'

const restaurant: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    image: sushi,
    infos: ['Sushi', 'Japanese', 'Delivery'],
    rating: 4.5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: macarronada,
    infos: ['Pasta', 'Italian', 'Takeout'],
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    title: 'Hioki Sushi ',
    image: sushi,
    infos: ['Sushi', 'Japanese', 'Delivery'],
    rating: 4.5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: macarronada,
    infos: ['Pasta', 'Italian', 'Takeout'],
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <div className="container">
      <ProductList restaurant={restaurant} />
    </div>
  </>
)

export default Home
