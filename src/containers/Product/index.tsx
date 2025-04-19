import Tag from '../Tag'
import { Card, Descricao, Image, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card to={`/product/${id}`}>
      <Image src={image} alt="" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
