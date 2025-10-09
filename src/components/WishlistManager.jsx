import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/userSlice";
import { Heart, Trash2, Star, ShoppingCart } from "lucide-react";
import Swal from "sweetalert2";
import Pro from "../pages/Profile.module.css";

const WishlistManager = () => {
  const wishlist = useSelector((state) => state.user.data.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromWishlist(productId));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className={Pro["profile-section"]}>
      <div className={Pro["section-header"]}>
        <h2>My Wishlist</h2>
        <p className={Pro["section-subtitle"]}>{wishlist.length} items saved</p>
      </div>

      {wishlist.length === 0 ? (
        <div className={Pro["empty-state"]}>
          <Heart size={64} />
          <h3>Your wishlist is empty</h3>
          <p>Save items you love for later</p>
        </div>
      ) : (
        <div className={Pro["wishlist-grid"]}>
          {wishlist.map((item) => (
            <div key={item.productId} className={Pro["wishlist-item"]}>
              <div className={Pro["item-image-container"]}>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className={Pro["item-image"]}
                />
                <button
                  className={Pro["btn-remove"]}
                  onClick={() => handleRemoveFromWishlist(item.productId)}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className={Pro["item-content"]}>
                <h3>{item.productName}</h3>
                <p className={Pro["item-description"]}>
                  {item.productDescription}
                </p>

                <div className={Pro["item-rating"]}>
                  <Star size={16} fill="currentColor" />
                  <span>{item.productRating}</span>
                  <span className={Pro["category"]}>• {item.categoryName}</span>
                </div>

                <div className={Pro["item-price"]}>
                  <span className={Pro["price"]}>
                    {formatPrice(item.price)}
                  </span>
                </div>

                <button className={Pro["btn-add-cart"]}>
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistManager;
