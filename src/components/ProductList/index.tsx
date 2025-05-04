import Product from '../Product'

import { List, Container } from './styles'

import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurant: Restaurant[]
}

const ProductList = ({ restaurant }: Props) => (
  <Container>
    <List>
      {restaurant.map((restaurant) => (
        <Product
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.title}
          image={restaurant.image}
          infos={restaurant.infos}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
