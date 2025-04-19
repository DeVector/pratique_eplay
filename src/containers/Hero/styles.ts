import styled from 'styled-components'
import { cores } from '../../styles'

import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  padding-top: 16px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column; /**Colocar o direcionamento para coluna */
    height: 100%; /**Ocupar 100% do espaço do componente pai */
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

/*export const Infos = styled.div`
  position: absolute;
  top: 32px;


`*/

export const BackInfo = styled.div`
  padding: 16px;
  max-width: 290px;
  color: ${cores.branca};
  background-color: ${cores.preta};
  font-weight: 700;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
