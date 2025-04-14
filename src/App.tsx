import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import { GlobaCss } from './styles'

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
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
