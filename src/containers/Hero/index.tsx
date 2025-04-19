import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  category: string
  system: string
  title: string
  image: string
  priceNormal: number
  priceDesc: number
}

const Hero = ({
  category,
  system,
  title,
  image,
  priceNormal,
  priceDesc
}: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div>
          <Tag>{category}</Tag>
          <Tag>{system}</Tag>
        </div>
        <S.BackInfo>
          <h2> {title} </h2>
          <p>
            <span>De R$ {priceNormal}</span>
            Por R$ {priceDesc}
          </p>
          <Button type="button" variant="primary" title="Adicionar ao carrinho">
            Adicionar ao carrinho
          </Button>
        </S.BackInfo>
      </div>
    </S.Banner>
  )
}

export default Hero
