import { Card, Titulo, Descricao } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  id: number
}

const CategoryProduct = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button title="Adicionar ao Carrinho" type="button">
      Adicionar ao Carrinho
    </Button>
  </Card>
)

export default CategoryProduct
