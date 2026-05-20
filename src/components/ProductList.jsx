import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const products = [

    {
      id: 1,
      name: "Snake Plant",
      price: 350,
      category: "Air Purifying",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },

    {
      id: 2,
      name: "Aloe Vera",
      price: 250,
      category: "Medicinal",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },

    {
      id: 3,
      name: "Peace Lily",
      price: 450,
      category: "Flowering",
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },

    {
      id: 4,
      name: "Money Plant",
      price: 300,
      category: "Indoor",
      image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e"
    },

    {
      id: 5,
      name: "Spider Plant",
      price: 280,
      category: "Air Purifying",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },

    {
      id: 6,
      name: "Rose Plant",
      price: 500,
      category: "Flowering",
      image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493"
    }

  ];

  return (

    <div className="product-container">

      <h1>Our Plants</h1>

      <div className="product-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h3>{product.category}</h3>

            <p>₹ {product.price}</p>

            <button
              onClick={() => dispatch(addItem(product))}
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default ProductList