import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const plants = [

    {
      id: 1,
      name: "Snake Plant",
      price: 350,
      category: "Air Purifying Plants",
      description: "Removes toxins from air",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },

    {
      id: 2,
      name: "Spider Plant",
      price: 300,
      category: "Air Purifying Plants",
      description: "Easy indoor plant",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },

    {
      id: 3,
      name: "Aloe Vera",
      price: 250,
      category: "Medicinal Plants",
      description: "Useful medicinal plant",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },

    {
      id: 4,
      name: "Tulsi Plant",
      price: 200,
      category: "Medicinal Plants",
      description: "Sacred herbal plant",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
    },

    {
      id: 5,
      name: "Rose Plant",
      price: 500,
      category: "Flowering Plants",
      description: "Beautiful flowering plant",
      image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493"
    },

    {
      id: 6,
      name: "Peace Lily",
      price: 450,
      category: "Flowering Plants",
      description: "Elegant indoor flower",
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    }

  ];

  return (

    <div className="product-container">

      <h1>Our Plants Collection</h1>

      <div className="product-grid">

        {plants.map((plant) => {

          const addedToCart = cartItems.find(
            (item) => item.id === plant.id
          );

          return (

            <div
              className="product-card"
              key={plant.id}
            >

              <img
                src={plant.image}
                alt={plant.name}
              />

              <h2>{plant.name}</h2>

              <h3>{plant.category}</h3>

              <p>{plant.description}</p>

              <h3>₹ {plant.price}</h3>

              <button

                disabled={addedToCart}

                onClick={() => dispatch(addItem(plant))}
              >

                {addedToCart
                  ? "Added to Cart"
                  : "Add to Cart"}

              </button>

            </div>

          )
        })}

      </div>

    </div>

  )
}

export default ProductList