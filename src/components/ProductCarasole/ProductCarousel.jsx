import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import ShopByCatagoriesCard from "../ShopByCatagories/ShopByCatagoriesCard";
import TopStoresCard from "../TopStories/TopStoresCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carasole.css";

const  ProductCarousel = ({ products, title, subtitle, viewAllLink, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carasole-container mt-4">
      <h2 className="ProductCarouselh2 text-center">{title}</h2>
      <p className="text-center">{subtitle}</p>
      <p className="text-center text-danger">
        <a href={viewAllLink} style={{ color: "red", textDecoration: "none" }}>
          View All
        </a>
      </p>

      <Slider {...settings} className="product-carousel">
        {products.map((product) =>
          type === "product" ? (
            <div key={product.id} style={{ marginRight: "12px" }}>
              <ProductCard product={product} />
            </div>
          ) : type === "category" ? (
            <div key={product.id} style={{ marginRight: "12px" }}>
              <ShopByCatagoriesCard product={product} />
            </div>
          ) : type === "topStores" ? (
            <div key={product.id} style={{ marginRight: "12px" }}>
              <TopStoresCard store={product} />
            </div>
          ) : null
        )}
      </Slider>
    </div>
  );
};

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      icon: PropTypes.string,
      quantity: PropTypes.string,
      price: PropTypes.string,
      originalPrice: PropTypes.string,
      discount: PropTypes.number,
      options: PropTypes.arrayOf(PropTypes.string),
      isVegetarian: PropTypes.bool,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  viewAllLink: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["product", "category", "topStores"]).isRequired,
};

export default ProductCarousel;
