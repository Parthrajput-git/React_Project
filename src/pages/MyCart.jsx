import "./MyCart.css";
export default function MyCart({ cartData, setCartData }) {
  const removeFromCart = (productId) => {
    setCartData((prev) => prev.filter((item) => item.productId !== productId));
  };
  const increaseQuantity = (productId) => {
    setCartData((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartData((prev) =>
      prev.map((item) =>
        item.productId === productId && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 My Cart</h2>
      </div>

      {cartData.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          <div>


            {
              cartData && <div>


                {
                  cartData?.map((item, index) => (
                    <div className="cart-item" key={index}>
                      <img src={item.productImage} alt={item.productName} />
                      <div className="cart-details">
                        <h3>{item.productName}</h3>
                        <p>{item.productDescription}</p>
                        <span>⭐ {item.productRating}</span>
                      </div>

                      <div className="cart-quantity">
                        <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                        <span>{item.quantity || 1}</span>
                        <button onClick={() => increaseQuantity(item.productId)}>+</button>
                      </div>

                      <button
                        className="btn remove"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
}
