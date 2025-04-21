import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobaCss } from './styles'

import store from './store'

import Menu from './containers/Menu'

import Rotas from './routes'
import Footer from './containers/Footer'
import Cart from './containers/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobaCss />
        <div className="container">
          <Menu />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
