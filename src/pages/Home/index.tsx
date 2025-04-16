import Banner from '../../containers/Banner'
import Menu from '../../containers/Menu'
import ProductsList from '../../containers/ProductsList'

const Home = () => (
  <>
    <div className="container">
      <Menu />
    </div>
    <Banner />
    <ProductsList title="Promoções" background="gray" />
    <ProductsList title="Em breve" background="black" />
  </>
)

export default Home
