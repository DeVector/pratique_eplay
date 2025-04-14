import styled from 'styled-components'

export const Banner = styled.div`
  padding-top: 340px;
  padding-bottom: 64px;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
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
