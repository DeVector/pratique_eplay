import Button from '../Button'

import gtaVI from '../../images/gta_vi.png'

import * as S from './styles'
import Tag from '../Tag'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.SideBar>
        <ul>
          <S.CartItem>
            <img src={gtaVI} alt="" />
            <div>
              <h3>Grand Thef Auto VI</h3>
              <Tag>Ação</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={gtaVI} alt="" />
            <div>
              <h3>Grand Thef Auto VI</h3>
              <Tag>Ação</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Quantity>2 Jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button type="button" title="Continuar com a compra">
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
