import styled from 'styled-components'

import { cores } from '../../styles'

export const BarraMenu = styled.header`
  margin-bottom: 80px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.cinza};
  font-size: 16px;
  font-weight: 700;
  border-radius: 16px;

  a {
    color: ${cores.branca};
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const MenuCarrinho = styled.a`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  padding-right: 20px;
`

export const LogoCompras = styled.img`
  padding-left: 16px;
`
