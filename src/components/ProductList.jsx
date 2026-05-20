import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 200,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 300,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 3,
      name: "Money Plant",
      price: 250,
      image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e"
    }
  ];

  return (
    <div className="product-container">

      <h1>Plant Shop</h1>

      <div className="product-grid">

        {products.map((product) => (

          <div className="card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>₹ {product.price}</p>

            <button
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;