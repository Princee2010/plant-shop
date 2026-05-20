import './App.css'

import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function App() {

  return (

    <div>

      <div className="landing-page">

        <div className="overlay">

          <h1 className="company-name">
            Paradise Nursery
          </h1>

          <p className="tagline">
            Bring Nature Closer To Your Home
          </p>

          <button className="get-started-btn">
            Get Started
          </button>

        </div>

      </div>

      <AboutUs />

      <ProductList />

      <CartItem />

    </div>

  )
}

export default App