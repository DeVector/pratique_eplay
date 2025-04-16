import { BrowserRouter } from 'react-router-dom'

import { GlobaCss } from './styles'

import Menu from './containers/Menu'

import Rotas from './routes'
import Footer from './containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobaCss />
      <div className="container">
        <Menu />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
