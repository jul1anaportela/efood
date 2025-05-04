import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'
import CategoryHeader from './components/CategoryHeader'
import CategoryBanner from './components/CategoryBanner'

const AppLayout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isCategoriesPage = location.pathname === '/categories'

  return (
    <>
      {isHomePage && <Header />}
      {isCategoriesPage && <CategoryHeader />}
      {isCategoriesPage && <CategoryBanner />}
      <div className="container">
        <Rotas />
      </div>
      <Footer />
    </>
  )
}

export default AppLayout
