import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="Red 2"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="GTA Trilogy"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 750']}
          system="windows"
          title="GTA VI"
        />
        <Product
          category="Aventura"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 200']}
          system="windows"
          title="Super Mario World"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
