import { Link } from 'react-router-dom'

import {
  BarraMenu,
  LinkItem,
  Links,
  LogoCompras,
  LogoImg,
  MenuCarrinho
} from './styles'

import LogoIcon from '../../images/logo.svg'
import LogoCarrinho from '../../images/carrinho.svg'

const Menu = () => (
  <BarraMenu>
    <div>
      <LogoImg src={LogoIcon} alt="Icone da Logo escrito EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <MenuCarrinho href="#">
      <span>0 - produto(s)</span>
      <LogoCompras src={LogoCarrinho} alt=" Logo Carrinho" />
    </MenuCarrinho>
  </BarraMenu>
)

export default Menu
