import * as S from './styles'

import ImgBackGround from '../../images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${ImgBackGround})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.NameGame>
            Marvel&#39;s Spider-Man: Miles Morales PS4 & PS5
          </S.NameGame>
          <S.PriceGame>
            De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
          </S.PriceGame>
        </div>
        <Button type="link" to="/produto" title="Clique aqui e aproveite agora">
          Aproveitar
        </Button>
      </div>
    </S.Banner>
  )
}

export default Banner
