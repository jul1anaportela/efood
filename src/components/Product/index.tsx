import { Link } from 'react-router-dom'
import {
  Card,
  Titulo,
  Descricao,
  ContainerTitulo,
  ContainerAvalicao,
  Infos
} from './styles'
import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
  id: number
}

const Product = ({ title, description, image, rating, infos, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <ContainerTitulo>
      <Titulo>{title}</Titulo>
      <ContainerAvalicao>
        <span>{rating}</span>
        <img src={estrela} alt="estrela" />
      </ContainerAvalicao>
    </ContainerTitulo>
    <Descricao>{description}</Descricao>
    <Link
      to={`/categories?id=${id}&title=${encodeURIComponent(
        title
      )}&infos=${encodeURIComponent(
        JSON.stringify(infos)
      )}&image=${encodeURIComponent(image)}`}
    >
      <Button title="Saiba Mais" type="button">
        Saiba Mais
      </Button>
    </Link>
  </Card>
)

export default Product
