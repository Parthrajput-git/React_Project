import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About.jsx";
import Category from "./pages/Category.jsx";
import LaptopDetail from "./pages/LaptopDetail.jsx";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist.jsx";
import Profile from "./pages/Profile.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import SingleLaptopInfo from "./pages/SingleLaptopInfo.jsx";
import MyCart from "./pages/MyCart.jsx"
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [product, setProduct] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [cartData, setCartData] = useState([])

  function handleProductSingle(data) {
    setProduct(data);
  }

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.productId === product.productId)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.productId !== id));
  };

  return (
    <div className="App">
      <Navbar mycart={cartData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        {/* <Route
          path="/wishlist"
          element={
            <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
          }
        /> */}
        <Route path="/profile" element={<Profile wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
        <Route path="/profile/reset-password" element={<ResetPassword />} />
        <Route
          path="/laptop-detail/category/:categoryName/:id"
          element={<LaptopDetail handleProductSingle={handleProductSingle} />}
        />
        <Route
          path="/laptop-detail/category/:categoryName/:id/product/:productName/:pid"
          element={
            <SingleLaptopInfo
              product={product}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              wishlist={wishlist}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
        <Route path="/mycart" element={<MyCart  cartData={cartData}
          setCartData={setCartData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
