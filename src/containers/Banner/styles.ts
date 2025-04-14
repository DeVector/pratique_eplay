import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  padding-bottom: 64px;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const NameGame = styled.h2`
  font-size: 34px;
  max-width: 450px;
`

export const PriceGame = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
