import * as S from './styles'

import ImgBackGround from '../../images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${ImgBackGround})` }}>
      <div className="container">
        <S.NameGame>
          Marvel&#39;s Spider-Man: Miles Morales PS4 & PS5
        </S.NameGame>
        <div>
          <S.PriceGame>
            De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
          </S.PriceGame>
        </div>
      </div>
    </S.Banner>
  )
}

export default Banner
