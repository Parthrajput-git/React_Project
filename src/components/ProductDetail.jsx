import { useNavigate } from "react-router-dom";
import "./ProductDetail.css"

export default function ProductDetail({ product }) {
  const navigate = useNavigate()

  // Mock data for demonstration (you can remove this if your product has these fields)
  const productWithDetails = {
    ...product,
    rating: product.rating || 4.5,
    reviewCount: product.reviewCount || 128,
    inStock: product.inStock !== undefined ? product.inStock : true,
    discount: product.discount || 15,
    category: product.category || "Electronics"
  }

  // Function to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i}>☆</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        Back to Products
      </button>
      
      <div className="product-detail-container">
        <div className="detail-image-container">
          <img 
            src={product.productImage} 
            alt={product.productName} 
            className="detail-image" 
          />
        </div>
        
        <div className="detail-info">
          <span className="category-tag">{productWithDetails.category}</span>
          
          <h2>{product.productName}</h2>
          
          <div className="rating">
            <div className="stars">
              {renderStars(productWithDetails.rating)}
            </div>
            <span className="rating-count">
              ({productWithDetails.reviewCount} reviews)
            </span>
          </div>
          
          <div className="price-section">
            <span className="price">
              ₹{product.price}
              <span className="price-currency">.00</span>
            </span>
            <span className="discount-badge">
              {productWithDetails.discount}% OFF
            </span>
          </div>
          
          <p className="product-description">
            {product.productDescription}
          </p>
          
          <div className="product-meta">
            <div className="meta-item">
              <span>🟢</span>
              <span>{productWithDetails.inStock ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div className="meta-item">
              <span>🚚</span>
              <span>Free Delivery</span>
            </div>
            <div className="meta-item">
              <span>↩️</span>
              <span>30-Day Returns</span>
            </div>
          </div>
          
          <div className="detail-buttons">
            <button className="add-cart-btn">
              <span>🛒</span>
              Add to Cart
            </button>
            <button className="buy-now-btn">
              <span>⚡</span>
              Buy Now
            </button>
            <button className="wishlist-btn">
              <span>❤️</span>
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}