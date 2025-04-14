import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container, GlobaCss } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobaCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
