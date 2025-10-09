import React from "react";
import "./SingleLaptopInfo.css";
import { toast } from 'react-toastify';

function SingleLaptopInfo({
  product,
  cartData,
  setCartData,
  addToWishlist,
  removeFromWishlist,
  wishlist = [],
}) {

  const isWishlisted = wishlist.find((item) => item.productId === product.productId);
  const cartItem = cartData?.find((item) => item.productId === product.productId);

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.productName} has been added to your wishlist!`);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.productId);
    toast.error(`${product.productName} has been removed from your wishlist.`);
  };

  const handleAddToCart = () => {
    setCartData((prev) => [...prev, { ...product, quantity: 1 }]);
    toast.success(`${product.productName} has been added to your cart!`);
  };


  const increaseQuantity = () => {
    setCartData((prev) =>
      prev.map((item) =>
        item.productId === product.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = () => {
    setCartData((prev) =>
      prev.flatMap((item) => {
        if (item.productId === product.productId) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          } else {
            toast.error(`${item.productName} has been removed from your cart.`);
            return [];
          }
        }
        return [item];
      })
    );
  };
  console.log(product.length)
  return (
    <div>
      <div className="laptop-container">
        <div className="laptop-image">
          <img src={product.productImage} alt={product.productName} />
        </div>
        <div className="laptop-details">
          <h2 className="laptop-title">{product.productName}</h2>
          <p className="laptop-description">{product.productDescription}</p>

          <div className="rating-price">
            <span className="rating">⭐ {product.productRating}</span>
          </div>

          <div className="button-group">

            {cartItem ? (
              <div className="cart-quantity-wrapper">
                <button onClick={decreaseQuantity}>-</button>
                <span>{cartItem.quantity}</span>
                <button onClick={increaseQuantity}>+</button>

              </div>
            ) : (
              <button className="btn cart add" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}

            <button
              className={isWishlisted ? "btn wishlist remove" : "btn wishlist add"}
              onClick={isWishlisted ? handleRemoveFromWishlist : handleAddToWishlist}
            >
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            <button className="btn buy">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SingleLaptopInfo;
