import { BrowserRouter } from 'react-router-dom'

import { GlobaCss } from './styles'

import Menu from './containers/Menu'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobaCss />
      <div className="container">
        <Menu />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
