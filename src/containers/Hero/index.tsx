import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatarPreco } from '../ProductsList'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.BackInfo>
          <h2> {game.name} </h2>
          <p>
            <span>De R$ {formatarPreco(game.prices.old)}</span>
            Por R$ {formatarPreco(game.prices.current)}
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
