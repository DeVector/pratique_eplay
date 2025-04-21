import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import btnClose from '../../images/btn_close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const SideBar = styled.aside`
  padding: 40px 16px 0 16px;
  background-color: ${cores.cinza};
  max-width: 360px;
  width: 100%;
  z-index: 1;

  ${ButtonContainer} {
    width: 100%;
  }
`
export const Quantity = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 32px 0 16px 0;
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: ${cores.cinzaClaro};
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  position: relative;
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: ${btnClose};
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
