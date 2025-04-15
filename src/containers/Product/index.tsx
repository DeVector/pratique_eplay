import Tag from '../Tag'
import { Card, Descricao, Title } from './styles'

const Product = () => (
  <Card>
    <img src="/placehold.it/222x250" alt="" />
    <Title>Nome do Jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>SO</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore
      non deleniti, molestias hic nulla voluptatem architecto ab recusandae
      eveniet repudiandae fugit ipsam quae vero cum ad nihil quia temporibus.
    </Descricao>
  </Card>
)

export default Product
