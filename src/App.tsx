import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCss } from './styles'
import { CarrinhoProvider } from './contexts/CarrinhoContext'

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>
  )
}

export default App
