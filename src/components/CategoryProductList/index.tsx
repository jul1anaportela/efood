import CategoryProduct from '../CategoryProduct'
import { List } from './styles'

import Meals from '../../models/Meals'

export type Props = {
  meals: Meals[]
}

const CategoryProductList = ({ meals }: Props) => (
  <div>
    <List>
      {meals.map((meal) => (
        <CategoryProduct
          key={meal.id}
          id={meal.id}
          title={meal.title}
          description={meal.description}
          image={meal.image}
        />
      ))}
    </List>
  </div>
)

export default CategoryProductList
