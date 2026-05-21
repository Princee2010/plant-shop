import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const plants = {

    "Air Purifying Plants": [

      {
        id: 1,
        name: "Snake Plant",
        price: 350,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
      },

      {
        id: 2,
        name: "Spider Plant",
        price: 300,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
      }

    ],

    "Medicinal Plants": [

      {
        id: 3,
        name: "Aloe Vera",
        price: 250,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      },

      {
        id: 4,
        name: "Tulsi Plant",
        price: 200,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
      }

    ],

    "Flowering Plants": [

      {
        id: 5,
        name: "Rose Plant",
        price: 500,
        image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493"
      },

      {
        id: 6,
        name: "Peace Lily",
        price: 450,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
      }

    ]

  };

  return (

    <div className="product-container">

      <h1>Our Plants Collection</h1>

      {Object.entries(plants).map(([category, items]) => (

        <div key={category}>

          <h2>{category}</h2>

          <div className="product-grid">

            {items.map((plant) => {

              const isAdded = cartItems.find(
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

                  <h3>{plant.name}</h3>

                  <p>Price: ₹ {plant.price}</p>

                  <button

                    disabled={isAdded}

                    onClick={() => dispatch(addItem(plant))}
                  >

                    {isAdded
                      ? "Added to Cart"
                      : "Add to Cart"}

                  </button>

                </div>

              )
            })}

          </div>

        </div>

      ))}

    </div>

  )
}

export default ProductList