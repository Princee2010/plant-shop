import './App.css'

import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function App() {

  return (
    <div className="container">

      <div className="overlay">

        <h1 className="company-name">
          Plant Paradise
        </h1>

        <p className="tagline">
          Best Indoor Plants Collection
        </p>

        <button className="btn">
          Get Started
        </button>

      </div>

      <AboutUs />

      <ProductList />

      <CartItem />

    </div>
  )
}

export default App