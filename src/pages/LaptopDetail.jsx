import { Link, useParams } from "react-router-dom";
import "./LaptopDetails.css";
import { data } from "../utils/Data.js";
import LaptopCard from "../components/LaptopCard.jsx";
import { useState } from "react";
import Pagination from "../components/Pagination.jsx";

function LaptopDetail({ handleProductSingle }) {
  const params = useParams();
  console.log(params)
  const categoryName = params.categoryName;

  const mySelctedCategory = data?.find(
    (category) => category.categoryName === categoryName
  );
  console.log(mySelctedCategory)

  const cardsPerPage = 3;

  const [allPage, setAllPage] = useState(1);
  const [trendPage, setTrendPage] = useState(1);
  const [latestPage, setLatestPage] = useState(1);
  const [sellPage, setSellPage] = useState(1);

  if (!mySelctedCategory) {
    return <p>No category selected!</p>;
  }

  const allProducts = mySelctedCategory.products || [];
  const totalAllPages = Math.ceil(allProducts.length / cardsPerPage);
  const allSlice = allProducts.slice(
    (allPage - 1) * cardsPerPage,
    allPage * cardsPerPage
  );

  const trendProducts = mySelctedCategory.topTrendingProducts || [];
  const totalTrendPages = Math.ceil(trendProducts.length / cardsPerPage);
  const trendSlice = trendProducts.slice(
    (trendPage - 1) * cardsPerPage,
    trendPage * cardsPerPage
  );

  const latestProducts = mySelctedCategory.latestProducts || [];
  const totalLatestPages = Math.ceil(latestProducts.length / cardsPerPage);
  const latestSlice = latestProducts.slice(
    (latestPage - 1) * cardsPerPage,
    latestPage * cardsPerPage
  );

  const sellProducts = mySelctedCategory.mostSellingProducts || [];
  const totalSellPages = Math.ceil(sellProducts.length / cardsPerPage);
  const sellSlice = sellProducts.slice(
    (sellPage - 1) * cardsPerPage,
    sellPage * cardsPerPage
  );

  return (
    <div className="laptop-detail-container">
      {/* Category Header */}
      <div className="laptop-header">
        <img
          src={mySelctedCategory?.categoryImage}
          alt={mySelctedCategory?.categoryName}
          className="laptop-image"
        />
        <div>
          <h1>{mySelctedCategory?.categoryName}</h1>
          <p>{mySelctedCategory?.categoryDescription}</p>
        </div>
      </div>

      {/* All Products */}
      <h2>All Products</h2>
      <div className="product-grid">
        {allSlice?.map((prod, index) => (
          <LaptopCard
            product={prod}
            key={index}
            mySelctedCategory={mySelctedCategory}
            handleProductSingle={handleProductSingle}
          />
        ))}
      </div>
      <Pagination
        currentPage={allPage}
        totalPages={totalAllPages}
        setCurrentPage={setAllPage}
      />

      {/* Top Trending */}
      <h2>🔥 Top Trending</h2>
      <div className="product-grid">
        {trendSlice?.map((prod, index) => (
          <Link
            key={prod.productId}
            to={`/laptop-detail/category/${mySelctedCategory?.categoryName}/${mySelctedCategory?.categoryId}/product/${prod?.productName}/${prod.productId}`}
          >
            <LaptopCard
              product={prod}
              key={index}
              mySelctedCategory={mySelctedCategory}
              handleProductSingle={handleProductSingle}
            />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={trendPage}
        totalPages={totalTrendPages}
        setCurrentPage={setTrendPage}
      />

      {/* Latest */}
      <h2>🆕 Latest</h2>
      <div className="product-grid">
        {latestSlice?.map((prod, index) => (
          <LaptopCard
            product={prod}
            key={index}
            mySelctedCategory={mySelctedCategory}
            handleProductSingle={handleProductSingle}
          />
        ))}
      </div>
      <Pagination
        currentPage={latestPage}
        totalPages={totalLatestPages}
        setCurrentPage={setLatestPage}
      />

      {/* Most Selling */}
      <h2>💯 Most Selling</h2>
      <div className="product-grid">
        {sellSlice?.map((prod, index) => (
          <LaptopCard
            product={prod}
            key={index}
            mySelctedCategory={mySelctedCategory}
            handleProductSingle={handleProductSingle}
          />
        ))}
      </div>
      <Pagination
        currentPage={sellPage}
        totalPages={totalSellPages}
        setCurrentPage={setSellPage}
      />
    </div>
  );
}

export default LaptopDetail;
