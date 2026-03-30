import Footer from './components/Footer'
import Home from './container/Home'
import RestaurantesHome from './container/Restaurantes'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Home />
      <RestaurantesHome />
      <Footer />
    </>
  )
}

export default App
