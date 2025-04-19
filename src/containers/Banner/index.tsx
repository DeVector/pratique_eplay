import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import { formatarPreco } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  console.log('Discount:', game.prices.discount, typeof game.prices.discount)

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.NameGame>{game.name}</S.NameGame>
          <S.PriceGame>
            {game.prices.discount && (
              <span>De R$ {formatarPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por R$ {formatarPreco(game.prices.current)}</>
            )}
          </S.PriceGame>
        </div>
        {game.prices.current && (
          <Button
            type="link"
            to={`/product/${game.id}`}
            title="Clique aqui e aproveite agora"
          >
            Aproveitar
          </Button>
        )}
      </div>
    </S.Banner>
  )
}

export default Banner
