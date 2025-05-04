import CategoryProductList from '../../components/CategoryProductList'

import sushiProduct from '../../assets/images/sushi_product.png'

import Meals from '../../models/Meals'

const meals: Meals[] = [
  {
    id: 1,
    title: 'Sushi',
    image: sushiProduct,
    description:
      'Sushi é um prato tradicional japonês que consiste em arroz temperado com vinagre, combinado com peixe cru, frutos do mar ou vegetais. É conhecido por sua apresentação artística e variedade de sabores. O sushi é frequentemente servido com molho de soja, wasabi e gengibre em conserva.'
  },
  {
    id: 2,
    title: 'Sushi',
    image: sushiProduct,
    description:
      'Sushi é um prato tradicional japonês que consiste em arroz temperado com vinagre, combinado com peixe cru, frutos do mar ou vegetais. É conhecido por sua apresentação artística e variedade de sabores. O sushi é frequentemente servido com molho de soja, wasabi e gengibre em conserva.'
  },
  {
    id: 3,
    title: 'Sushi',
    image: sushiProduct,
    description:
      'Sushi é um prato tradicional japonês que consiste em arroz temperado com vinagre, combinado com peixe cru, frutos do mar ou vegetais. É conhecido por sua apresentação artística e variedade de sabores. O sushi é frequentemente servido com molho de soja, wasabi e gengibre em conserva.'
  }
]

const Categories = () => (
  <>
    <CategoryProductList meals={meals} />
  </>
)

export default Categories
