import "./Wishlist.css";
import empty from '../assets/empty_wishlist.jpg'
function Wishlist({ wishlist = [], removeFromWishlist = () => {} }) {
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <img
            src={empty}
            alt="Empty Wishlist"
            className="empty-img"
          />
          <p>Your wishlist is empty!</p>
          <small>Add some laptops you like and they will appear here.</small>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.productId} className="wishlist-card">
              <img src={item.productImage} alt={item.productName} />
              <div className="wishlist-info">
                <h3>{item.productName}</h3>
                <p>₹{item.price ? Number(item.price).toLocaleString() : "N/A"}</p>
                <small>⭐ {item.productRating || "N/A"}</small>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
