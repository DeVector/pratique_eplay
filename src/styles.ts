import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobaCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Robot, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    margin-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
