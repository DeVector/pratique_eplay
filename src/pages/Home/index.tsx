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
  </>
)

export default Home
